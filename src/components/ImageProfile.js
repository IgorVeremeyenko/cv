import Image from "../assets/img/photo.jpg"

export const ImageProfile = () => {
    return (
        <div style={styles}></div>
    )
}

const styles = {
    background: `url(${Image})`,
    height: '100%',
    width: '100%',
    backgroundSize: 'cover',
    backgroundColor: 'grey',
    flex: 2
}