import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

function SpecialOffer() {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full " />
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
         
          <span className="text-coral-red "> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, innovation for your active life Discover stylish Nike arrivals, quality comfort, innovation for your active life</p>
        <p className="mt-6 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, innovation for your active life Discover stylish Nike arrivals, quality comfort, innovation for your active life</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View details" iconURL={arrowRight} />
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColar="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer