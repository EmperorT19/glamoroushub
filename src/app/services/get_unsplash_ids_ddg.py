import urllib.request
import re
import urllib.parse

def search_ddg_unsplash(query):
    search_query = f"site:unsplash.com {query}"
    encoded_query = urllib.parse.quote(search_query)
    url = f"https://html.duckduckgo.com/html/?q={encoded_query}"
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8', errors='ignore')
            
            # Find photo page links which contain the ID in their slug
            # e.g., href="https://unsplash.com/photos/happy-black-boy-xxxxx" or similar
            found_urls = re.findall(r'href="([^"]*unsplash\.com/photos/[^"]*)"', html)
            
            links = []
            for href in found_urls:
                match = re.search(r'uddg=(https%3A%2F%2Funsplash\.com%2Fphotos%2F[^&]+)', href)
                if match:
                    clean_url = urllib.parse.unquote(match.group(1))
                    links.append(clean_url)
                elif href.startswith('https://unsplash.com/photos/'):
                    links.append(href)
                elif href.startswith('//unsplash.com/photos/'):
                    links.append('https:' + href)
            
            photo_ids = []
            for link in links:
                link_clean = link.split('?')[0]
                parts = link_clean.strip('/').split('/')
                if parts:
                    last_part = parts[-1]
                    slug_parts = last_part.split('-')
                    photo_id = slug_parts[-1]
                    if re.match(r'^[a-zA-Z0-9]+$', photo_id) and len(photo_id) >= 6:
                        photo_ids.append((link_clean, photo_id))
            
            # Deduplicate
            seen = set()
            unique_ids = []
            for link, pid in photo_ids:
                if pid not in seen:
                    seen.add(pid)
                    unique_ids.append((link, pid))
            
            print(f"Results for '{query}':")
            if not unique_ids:
                print("  No results found.")
            for link, pid in unique_ids[:5]:
                print(f"  ID: {pid} | Link: {link}")
                print(f"  URL: https://images.unsplash.com/photo-{pid}?q=80&w=600&auto=format&fit=crop")
    except Exception as e:
        print(f"Error searching for '{query}': {e}")

queries = [
    "happy black boy",
    "black boy haircut",
    "barbershop chair",
    "barbershop interior",
    "black barber styling"
]

for q in queries:
    search_ddg_unsplash(q)
    print("-" * 50)
