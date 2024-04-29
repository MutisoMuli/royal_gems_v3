import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[60vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle" style={{ backgroundImage: "url('https://res.cloudinary.com/dhbztjzkr/image/upload/v1713929732/image_2_gndmac.jpg')", backgroundSize: "100% auto", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
      <img src="https://res.cloudinary.com/dhbztjzkr/image/upload/v1713957203/royalgems_logo-removebg_rpnnvv.png" alt="Royal Gems Logo" style={{ height: "150px", width: "150px", margin: "auto"}} />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6"></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal mb-12" style={{ color: "gold", fontWeight: "bold", textShadow: "0 0 10px black", fontSize: "4rem", marginTop: "80px" }}
          >
            Welcome to Royal Gems Accessories
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal mb-12" style={{ color: "gold", fontWeight: "bold", textShadow: "0 0 10px black", fontSize: "2rem"}}
          >
            Since 2021
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
