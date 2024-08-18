
const SingleProduct = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-4 w-full mt-4">
            <aside className="md:w-2/3 w-full border p-4 rounded-md">
                <img src="" alt="" />
                <h2>Tittle</h2>
                <div className="flex justify-between items-center">
                    <p>$120</p>
                    <p>Rating <span>(101)</span></p> 
                </div>
                <div>
                    <p>Description</p>
                </div>
            </aside>
            <aside className="md:w-1/3 w-full border p-4 rounded-md">
                <div>
                    <ul>
                        <li>
                            <div className="flex">
                                <img src="" alt="" />
                                <div>
                                    <p>Tittle</p>
                                    <div className="flex justify-between items-center">
                                        <p>$125</p>
                                        <p>Rating <span>(120)</span></p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default SingleProduct;