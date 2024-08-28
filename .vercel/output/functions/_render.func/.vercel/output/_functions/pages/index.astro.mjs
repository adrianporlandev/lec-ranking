/* empty css                                 */
import { c as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_Dwe2eVWZ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DAdbaXAc.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const teams = [
    { name: 'MDK', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/mdk.webp' },
    { name: 'G2', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/G2.webp' },
    { name: 'FNC', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/FNC.webp' },
    { name: 'SK', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/SK.webp' },
    { name: 'BDS', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/BDS.webp' },
    { name: 'TH', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/TH.webp' },
    { name: 'GX', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/GX.webp' },
    { name: 'VIT', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/VIT.webp' },
    { name: 'KC', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/KC.webp' },
    { name: 'RGE', imageUrl: 'https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868397/lol-project/teams/RGE.webp' },
  ];

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "LEC ELO Tracker", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <section class="hero py-12 md:py-24 lg:py-32 xl:py-48" data-astro-cid-j7pv25f6> <div class="container mx-auto px-4 md:px-6" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center space-y-4 text-center" data-astro-cid-j7pv25f6> <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white" data-astro-cid-j7pv25f6>
Sigue el ELO de los Pros de la LEC
</h1> <p class="mx-auto max-w-[700px] text-gray-400 md:text-xl" data-astro-cid-j7pv25f6>
Analiza el rendimiento de los mejores jugadores de la Liga Europea de League of Legends con nuestro avanzado sistema de tracking.
</p> <form class="w-full max-w-sm space-y-2" data-astro-cid-j7pv25f6> <div class="flex space-x-2" data-astro-cid-j7pv25f6> <input type="text" placeholder="Buscar jugador pro" class="w-full px-3 py-2 bg-gray-800 text-white placeholder-gray-500 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" data-astro-cid-j7pv25f6> <button type="submit" class="px-4 py-2 bg-yellow-500 text-gray-900 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-900" data-astro-cid-j7pv25f6> <i class="fas fa-search" data-astro-cid-j7pv25f6></i> </button> </div> </form> </div> </div> </section> <section id="teams" class="teams py-12 md:py-24 lg:py-32 bg-gray-900" data-astro-cid-j7pv25f6> <div class="container mx-auto px-4 md:px-6" data-astro-cid-j7pv25f6> <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center mb-8" data-astro-cid-j7pv25f6>
Equipos de la LEC
</h2> <div class="grid grid-cols-3 md:grid-cols-5 gap-4 justify-items-center" data-astro-cid-j7pv25f6> ${teams.map((team) => renderTemplate`<div class="bg-gray-800 p-4 rounded-lg" data-astro-cid-j7pv25f6> <a${addAttribute(`/teams/${team.name.toLowerCase().replace(/\s+/g, "-")}`, "href")} data-astro-cid-j7pv25f6> <img${addAttribute(team.imageUrl, "src")}${addAttribute(`Equipo LEC ${team.name}`, "alt")}${addAttribute(100, "width")}${addAttribute(100, "height")} class="rounded-full" data-astro-cid-j7pv25f6> </a> </div>`)} </div> </div> </section> </main> ` })} `;
}, "C:/Users/Adrian/webs/lec-ranking/src/pages/index.astro", void 0);

const $$file = "C:/Users/Adrian/webs/lec-ranking/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
