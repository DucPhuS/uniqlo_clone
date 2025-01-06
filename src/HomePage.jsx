import ScrollPage from "./GalleryWomen"
import PageHeaders from "./PageHeader"


function HomePage() {

  return (
    <div className="overflow-y-scroll no-scrollbar">
      <PageHeaders/>
      <ScrollPage/>
    </div>
  )
}

export default HomePage
