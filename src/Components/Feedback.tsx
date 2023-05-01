import { useState } from 'react';


function Feedback(props: any) {

    const [rating, setRating] = useState(0);

    return (
        <div className='row form-wrapper'>
                <h2>Feedback</h2>
                <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={`stars ${index <= rating ? "on" : "off"}`}
                                onClick={() => setRating(index)}
                            >
                                <span className="stars">&#9733;</span>
                            </button>
                        );
                    })}
                </div>
                <div className='data'>
                <label>Notes</label>

                <input className="inputdata" type='email' />

                </div>
            </div>



    );
}

export default Feedback;