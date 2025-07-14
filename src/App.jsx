import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts
} from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex text-white bg-green-800 font-sans min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-green-700 via-[#255016] to-[#9eef6b]">
        <Searchbar />

        {/* Routes & TopPlay */}
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll custom-scroll flex xl:flex-row flex-col-reverse gap-6 animate-slowfade">
          {/* Page Content */}
          <div className="flex-1 min-w-0 pb-32 animate-slideup">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>

          {/* Right-side TopPlay Component */}
          <div className="xl:sticky relative top-0 h-fit animate-slideright">
            <TopPlay />
          </div>
        </div>
      </div>

      {/* Music Player Bar */}
      {activeSong?.title && (
        <div className="absolute bottom-0 left-0 right-0 h-28 z-50 animate-slideup">
          <div className="flex items-center justify-between h-full bg-gradient-to-tr from-green-800 via-[#255016] to-[#9eef6b] backdrop-blur-lg shadow-2xl rounded-t-3xl px-6">
            <MusicPlayer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
