import GalleryWomen from "./GalleryWomen"
import PageHeaders from "./PageHeader"


function HomePage() {

  return (
    <div className="overflow-y-scroll no-scrollbar">
      <PageHeaders/>
      <GalleryWomen/>
    </div>
  )
}

export default HomePage
