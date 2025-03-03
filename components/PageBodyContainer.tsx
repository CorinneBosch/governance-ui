const PageBodyContainer = ({ children }) => (
  <div className="grid min-h-screen grid-cols-12 gap-4 pt-4 pb-44">
    <div className="z-[-1] fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#292833]">
      <picture>
        <source srcSet="/img/bg-desktop.png" media="(min-width: 640px)" />
        <img src="/img/bg-mobile.png" />
      </picture>
    </div>
    <div className="col-span-12 px-4 md:px-8 xl:px-4 xl:col-start-2 xl:col-span-10">
      {children}
    </div>
  </div>
)

export default PageBodyContainer
