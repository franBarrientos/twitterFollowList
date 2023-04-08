import Card from "./Card";
export default function App() {
  return (
    <main className=" bg-twitter-bg h-screen flex items-center justify-center">
      <div className=" flex flex-col gap-3 mb-10">
        <Card
          imgUrl="https://pbs.twimg.com/profile_images/1501728990431780866/RSnYLQxF_400x400.jpg"
          name="Cam"
          nick="@0Camgomez"
        />

        <Card
          imgUrl="https://pbs.twimg.com/profile_images/1581543518174167041/NLCpZF9G_400x400.jpg"
          name="Fran"
          nick="@franbarrientos0"
        />
         <Card
          imgUrl="https://pbs.twimg.com/profile_images/1501728990431780866/RSnYLQxF_400x400.jpg"
          name="Cam"
          nick="@0Camgomez"
        />
          <Card
          imgUrl="https://pbs.twimg.com/profile_images/1581543518174167041/NLCpZF9G_400x400.jpg"
          name="Fran"
          nick="@franbarrientos0"
        />
      </div>
    </main>
  );
}
