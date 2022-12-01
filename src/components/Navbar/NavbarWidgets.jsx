import { CartWidget, OptionsWidget } from "./"

const NavbarWidgets = () => {
  return (
    <div
      className="flex absolute right-0 2xl:pr-4 top-6 md:top-5 items-center"
    >
      <CartWidget />
      <OptionsWidget />
    </div>
  )
}

export { NavbarWidgets }