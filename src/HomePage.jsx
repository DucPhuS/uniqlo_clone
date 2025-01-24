import PageHeaders from "./PageHeader"
import PageSlider from "./ScrollPage"
import './input.css'

function HomePage() {

  return (
    <div className="overflow-y-scroll no-scrollbar">
      <PageHeaders/>
      <PageSlider/>
    </div>
  )
}

export default HomePage
