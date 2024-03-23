import { Link } from "react-router-dom"
import Sneaker from '../components/Sneaker'
import { useSelector } from "react-redux"
export const Liked = () => {
    const likedItems = useSelector((state) => state.sneakersReduce.likedItems)
    return (
        <>
            {likedItems.length > 0 ? (
                <div className="love">
                    <section className="liked">
                        <div className="container">
                            <div className="liked-content">
                                <Link to='/react-sneakers/'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="35"
                                        height="35"
                                        viewBox="0 0 35 35"
                                        fill="none"
                                    >
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="34"
                                            height="34"
                                            rx="7.5"
                                            fill="white"
                                            stroke="#F2F2F2"
                                        />
                                        <path
                                            d="M19 22L14 17L19 12"
                                            stroke="#C8C8C8"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                                <h2>My Favorites</h2>
                            </div>
                            <div className="liked-items">
                                {
                                    likedItems.map((item) => (
                                        <Sneaker
                                            key={item.id}
                                            imgURL={item.imgURL}
                                            name={item.name}
                                            price={item.price}
                                            id={item.id}
                                            liked={item.isLiked}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </section>
                </div>
            ) :
                (
                    <div className="empt">
                        <div className="wrapper-container">
                            <div className="wrapper">
                                <section className="empty">
                                    <div className="container">
                                        <div className="empty-content">
                                            <div className="sad">
                                                <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                                    <rect width="70" height="70" fill="url(#pattern0)" />
                                                    <defs>
                                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                            <use xlinkHref="#image0_60_1719" transform="scale(0.0138889)" />
                                                        </pattern>
                                                        <image id="image0_60_1719" width="72" height="72" xlinkHref="data:image/png;base64,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" />
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="no-liked">
                                                <h2>No Favorite :(</h2>
                                                <h4>You haven't liked any sneaker</h4>
                                            </div>
                                            <div className="empty-btn">
                                                <Link to='/react-sneakers/'>
                                                    <button>Get Back</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default Liked
