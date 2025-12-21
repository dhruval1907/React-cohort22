import React from "react";
import Cards from "./components/Cards";

const App = () => {
  return (
      <div className="parent h-screen w-full bg-black flex flex-wrap gap-4">
        <Cards
          com="amazon"
          day="5 day left"
          role="Senior UI/UX Designer"
          money="$120/hr"
          city="San francisco,CA"
          image="https://imgs.search.brave.com/9FKVTHzYWsPLYPyvF8eK_TH6Y8LNl0ZKPNUmhUP8rs8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc29jaWFsLW1l/ZGlhLTIxNjkvMjQv/c29jaWFsX21lZGlh/X3NvY2lhbF9tZWRp/YV9sb2dvX2FtYXpv/bi0xMjgucG5n"
        />
        <Cards
          com="Google"
          day="30 day left"
          role="Graphical Designer"
          money="$150-220k"
          city="Mountain view,CA"
          image="https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n"
        />
        <Cards
          com="Dribble"
          day="18 day left"
          role="Senior Motion Designer"
          money="$85-k"
          city="San francisco,CA"
          image="https://imgs.search.brave.com/yAnpd97jH3y9HxaqvoU0blXZiJ2vyZgMxCk2M1Y_SAM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/NS8wOC8yMS8yOC9k/cmliYmJsZS0zMzg0/MDExXzEyODAucG5n"
        />
        <Cards
          com="Meta"
          day="3 months left"
          role="UX Designer"
          money="$200-250k"
          city="New York,NY "
          image="https://imgs.search.brave.com/7qgn1TTiR0hPf8T9AKS6NkAJ26O84diiHLTkYRMGotM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMS8x/Mi8wNi8xMy80NS9t/ZXRhLTY4NTAzOTNf/NjQwLnBuZw"
        />
        <Cards
          com="Airbnb"
          day="1 day left"
          role="Graphical Designer"
          money="$150-220k"
          city="Mountain view,CA"
          image="https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n"
        />
        <Cards
          com="Google"
          day="30 day left"
          role="Graphical Designer"
          money="$150-220k"
          city="Mountain view,CA"
          image="https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n"
        />
        <Cards
          com="Google"
          day="30 day left"
          role="Graphical Designer"
          money="$150-220k"
          city="Mountain view,CA"
          image="https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n"
        />
        <Cards
          com="Google"
          day="30 day left"
          role="Graphical Designer"
          money="$150-220k"
          city="Mountain view,CA"
          image="https://imgs.search.brave.com/vgyIh0TbKxPNSu2j2PaXLnYOyFFuLCMYlBf_fL71sOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzUv/NzQ2LzA1Ni9zbWFs/bC9nb29nbGUtYXBw/LWxvZ28taW4tYmln/LXN1ci1zdHlsZS0z/ZC1yZW5kZXItaWNv/bi1kZXNpZ24tY29u/Y2VwdC1lbGVtZW50/LWlzb2xhdGVkLXRy/YW5zcGFyZW50LWJh/Y2tncm91bmQtZnJl/ZS1wbmcucG5n"
        />
      </div>
  );
};

export default App;
