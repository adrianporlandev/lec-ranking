import { c as createComponent, r as renderTemplate, a as addAttribute, b as renderHead, d as renderSlot, e as createAstro } from './astro/server_Dwe2eVWZ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="flex flex-col min-h-screen"> <header class="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800"> <a href="/" class="flex items-center justify-center"> <span class="ml-2 text-2xl font-bold text-white">LEC ELO Tracker</span> </a> <nav class="ml-auto flex gap-4 sm:gap-6"> <a class="text-sm font-medium hover:text-yellow-500 text-gray-300" href="/">Inicio</a> <a class="text-sm font-medium hover:text-yellow-500 text-gray-300" href="/jugadores">Jugadores</a> <a class="text-sm font-medium hover:text-yellow-500 text-gray-300" href="/ranking">Ranking</a> <a class="text-sm font-medium hover:text-yellow-500 text-gray-300" href="#teams">Equipos</a> </nav> </header> ${renderSlot($$result, $$slots["default"])} <footer class="mt-auto flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800"> <p class="text-xs text-gray-500">© 2023 LEC ELO Tracker. Todos los derechos reservados.</p> <nav class="sm:ml-auto flex gap-4 sm:gap-6"></nav></footer> </div> </body></html>`;
}, "C:/Users/Adrian/webs/lec-ranking/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
