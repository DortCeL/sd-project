import Feed from "../components/Feed";
import Leftbar from "../components/Leftbar";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";

function Home() {
	return (
		<>
			<Navbar />
			<div className='w-full flex flex-row justify-between'>
				<Leftbar />
				<Feed />
				<Rightbar />
			</div>
		</>
	);
}

export default Home;
