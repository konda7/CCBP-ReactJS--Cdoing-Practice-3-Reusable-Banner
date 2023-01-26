// Write your code here.
const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails

  return (
    <li className={className}>
      <h1>{headerText}</h1>
      <p>{description}</p>
      <button>Show More</button>
    </li>
  )
}

export default BannerCardItem
