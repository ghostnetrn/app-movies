import { useEffect, useState } from "react";
import VideoList from "../../components/VideoList";
import styles from "./SearchVideoList.module.css";
import Loader from "../Loader";

function filterVideos(videos, searchText) {
  return videos.filter(
    ({ category, title }) =>
      category?.toLowerCase().includes(searchText) ||
      title?.toLowerCase().includes(searchText)
  );
}

function SearchVideoList({ videos }) {
  const [searchText, setSearchText] = useState('');
  const foundVideos = filterVideos(videos, searchText);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [])

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Pesquisar..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value?.toLocaleLowerCase())}
      />

    {loading ? <Loader /> : (
      <VideoList 
      videos={foundVideos} 
      emptyHeading={`Sem vídeos sobre "${searchText}"`}
    />
    )}
      
    </section>
  );
}

export default SearchVideoList;
