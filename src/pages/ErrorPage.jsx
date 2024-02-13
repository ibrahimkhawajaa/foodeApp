import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
<div class="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr]  lg:grid-cols-[max(50%,36rem),1fr] w-screen h-[auto] place-items-center">
  <main class="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
    <div class="">
      <p class="text-base font-semibold leading-8 text-cyan-600">404</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10">
        <Link to="/" class="text-sm font-semibold leading-7 text-teal-600"><span aria-hidden="true">&larr;</span> Back to home</Link>
      </div>
    </div>
  </main>
  <footer class="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
  </footer>
  <div class="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
    <img src="https://images.newscientist.com/wp-content/uploads/2020/02/25113425/fnb1ej_web.jpg" alt="" class="absolute inset-0 h-full w-full object-cover"/>
  </div>
</div>
  )
}

export default ErrorPage
