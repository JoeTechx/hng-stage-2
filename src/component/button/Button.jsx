import React from "react"
import "./Button.css"

const Button = () => {
    return(
            <section className="btn__links">
                <div className="btn">
                    <a href="https://www.twitter.com/ojtech2000" className="btn__link">twitter</a>
                </div>

                <div className="btn">
                    <a href="https://training.zuri.team/" 
                    className="btn__link"
                     id="btn_zuri">
                    Zuri Teams
                    </a>
                </div>

                <div className="btn">
                    <a href="https://books.zuri.team/" 
                    className="btn__link"
                    id="books" 
                    title="Looking for the best design and coding books then click the button">
                    Zuri Books
                    </a>
                </div>

                <div className="btn">
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=<joex>" 
                    className="btn__link"
                    id="book_python" 
                    title="Get a Zero to Hero python book here">
                    Python Books
                    </a>
                </div>


                <div className="btn">
                    <a href="https://background.zuri.team/" 
                    className="btn__link"
                    id="pitch" 
                    title="looking for a code background check click here">
                    Background Check for code-pen
                    </a>
                </div>


                <div className="btn">
                    <a href="https://books.zuri.team/design-rules" 
                    className="btn__link"
                    id="book_design" 
                    title="looking for a code background check click here">
                    Design Books
                    </a>
                </div>

                
                <div className="btn">
                    <a href="/contact" 
                    className="btn__link"
                    id="contact" 
                    title="contact me for more info">
                    Contact Me
                    </a>
                </div>


            </section>
    )
}

export default Button