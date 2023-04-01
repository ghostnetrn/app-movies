import styles from './VideoList.module.css'
import Card from '../../components/Card'

function VideoList({ videos, emptyHeading}) {
  const count = videos.length
  let heading = emptyHeading
  let noun = null

  if (count > 0) {
    noun = count > 1 ? 'vídeos' : 'vídeo'
    heading = `${count} ${noun}`
  }

  return (
    <>
      <h2>{heading}</h2>
      <section className={styles.videos}>
        {videos.map(({id}) => <Card id={id} key={id} />)}
      </section>
    </>
  )
}

export default VideoList;