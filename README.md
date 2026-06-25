# TMDB App — Prova tècnica Doonamis

Aplicació web per explorar sèries de televisió populars utilitzant l'API de [TMDB](https://www.themoviedb.org/).

## Tecnologies

- React + TypeScript + Vite
- React Router DOM
- SCSS (CSS Modules)

## Arquitectura

- **models/** — Classes amb factory method `fromApi()` per transformar les respostes de l'API
- **services/** — Lògica de les crides a l'API separada dels components
- **hooks/** — Custom hook `useFetch` genèric i reutilitzable
- **components/** — Components reutilitzables (Header, Footer, ShowCard, SkeletonCard)
- **pages/** — Pàgines de l'aplicació (Home, ShowDetail)

## Funcionalitats

- Llistat de sèries populars amb skeleton loading
- Buscador de sèries
- Pàgina de detall per a cada sèrie
- Sèries similars a la pàgina de detall
- Disseny responsive

## Instal·lació

```bash
npm install
npm run dev
```

## Demo

https://jordicaballeria.github.io/doonamis-tech-test/
