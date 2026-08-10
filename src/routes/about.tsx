import { createFileRoute } from '@tanstack/react-router'
import MiniVideo from '#/components/MiniVideo.tsx'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <main className="mx-auto w-[80dvw] py-8 text-sm leading-6">
      <div className="flex flex-col gap-12">
        <article className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-(--about-title)">
              Mit csinál egy BSS-es?
            </h2>
            <p className="mt-4 text-(--bss-text-secondary)">
              A Budavári Schönherz Stúdió Budavári Schönherz Stúdió, röviden
              BSS, 1982 óta készít riportokat, interjúkat, műsorokat és stúdiós
              felvételeket a műegyetemi közösség számára. A munkafolyamat a
              tervezéstől a felvételen át egészen az utómunkáig tart.
            </p>
            <p className="mt-4 text-(--bss-text-secondary)">
              A csapatban mindenki megtalálhatja a saját területét: van, aki a
              kamera mögött érzi otthon magát, más a vágásban vagy a
              szervezésben segít, de az is könnyen megtalálja a helyét, aki még
              csak most ismerkedik a videós világgal.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="/video-thumbnail.png"
              alt="Mit csinál egy BSS-es?"
              className="h-60 w-full object-cover shadow-[0_6px_20px_rgba(0,0,0,0.12)] md:h-70"
            />
          </div>
        </article>

        <article className="flex flex-col gap-6 md:flex-row-reverse md:items-start md:gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-(--about-title)">
              Mérnök is kell, bölcsész is
            </h2>
            <p className="mt-4 text-(--bss-text-secondary)">
              A média világa komoly technikai tudást és jó kommunikációt is
              igényel. Egy-egy felvételnél fontos a világítás, a hang, a kamera
              beállítása és az is, hogy a stáb tagjai egymással jól tudjanak
              együtt dolgozni.
            </p>
            <p className="mt-4 text-(--bss-text-secondary)">
              Nálunk a műszaki érdeklődés és a kreatív szemlélet egyszerre
              számít. Ha szereted a technikát, de érdekel az, hogyan áll össze
              egy műsor a háttérben, akkor jó helyen jársz.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="/video-thumbnail.png"
              alt="Mérnök is kell, bölcsész is"
              className="h-60 w-full object-cover shadow-[0_6px_20px_rgba(0,0,0,0.12)] md:h-70"
            />
          </div>
        </article>

        <article className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-(--about-title)">
              Mivel foglalkozunk?
            </h2>
            <p className="mt-4 text-(--bss-text-secondary)">
              Heti rendszerességgel szerkesztett anyagokat, riportokat, élő
              közvetítéseket és különböző stúdiós felvételeket készítünk. A
              feladatok között megtalálható a forgatás, a kamerakezelés, a vágás
              és a produkciók előkészítése is.
            </p>
            <p className="mt-4 text-(--bss-text-secondary)">
              Az új tagok fokozatosan kapcsolódnak be a munkába, így mindenki a
              saját tempójában ismerheti meg az eszközöket és a stúdió
              működését.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="/video-thumbnail.png"
              alt="Mivel foglalkozunk?"
              className="h-60 w-full object-cover shadow-[0_6px_20px_rgba(0,0,0,0.12)] md:h-70"
            />
          </div>
        </article>

        <article className="flex flex-col gap-6 md:flex-row-reverse md:items-start md:gap-10">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-(--about-title)">
              Amikor nem forog a kamera
            </h2>
            <p className="mt-4 text-(--bss-text-secondary)">
              A stúdió életében nem csak a felvétel számít. A háttérben sok
              szervezés, egyeztetés és közös munka zajlik: a nyersanyagok
              rendezése, a vágás, az archiválás és a következő műsorok tervezése
              mind része a mindennapoknak.
            </p>
            <p className="mt-4 text-(--bss-text-secondary)">
              Ez teszi igazán csapattá a BSS-t: a felvételek mellett a közös
              munka, a tapasztalatcsere és az egymást segítő szemlélet is fontos
              szerepet kap.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="/video-thumbnail.png"
              alt="Amikor nem forog a kamera"
              className="h-60 w-full object-cover shadow-[0_6px_20px_rgba(0,0,0,0.12)] md:h-70"
            />
          </div>
        </article>

        <article className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10 justify-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-(--about-title)">
              Hogyan csatlakozhatok?
            </h2>
            <p className="mt-4 text-(--bss-text-secondary)">
              Ha érdekel a videózás, a televíziós műsorkészítés vagy a stúdiós
              munka, a tanfolyamainkon betekintést kapsz abba, hogyan dolgozunk.
              A jelentkezés után felvesszük veled a kapcsolatot, és megmutatjuk,
              hogyan lehet része a munkádnak a BSS.
            </p>
            <p className="mt-4 text-(--bss-text-secondary)">
              A célunk, hogy olyan közösséget építsünk, ahol a technikai tudás,
              a kreativitás és az együttműködés egyszerre fejlődik.
            </p>
          </div>
        </article>
        <div className="grid w-full grid-cols-4 gap-4">
          <div className="flex justify-center w-full">
            <MiniVideo />
          </div>
          <div className="flex justify-center w-full">
            <MiniVideo />
          </div>
          <div className="flex justify-center w-full">
            <MiniVideo />
          </div>
          <div className="flex justify-center w-full">
            <MiniVideo />
          </div>
        </div>
        <div className="grid w-[60dvw] grid-cols-3 gap-4 mx-auto ">
          <div className="flex justify-center w-full">
            <MiniVideo />
          </div>
          <div className="flex justify-center w-full">
            <MiniVideo />
          </div>
          <div className="flex justify-center w-full">
            <MiniVideo />
          </div>
        </div>
      </div>
    </main>
  )
}
