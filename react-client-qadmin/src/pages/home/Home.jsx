
import { userData } from "../../dummyData"
import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart title="User Analytics" data={userData} grid dataKey="Active User" />
      <div className="homeWidgets"></div>
    </div>
  )
}
