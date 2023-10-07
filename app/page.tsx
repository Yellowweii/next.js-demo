import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar } from "@/sections";
import { fetchCars } from "@/utils/request";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        <section>
          <div className="home__cars-wrapper">
            {allCars.map((car:JSX.Element, index: number) => (
              <CarCard key={index} car={car} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
