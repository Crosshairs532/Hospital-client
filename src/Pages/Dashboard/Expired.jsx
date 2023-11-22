
const Expired = () => {
    return (
        <div>
            <h1>Expired</h1>
            <div>
                <h1 className=" text-4xl font-bold"></h1>
                <div className="overflow-x-auto bg-red-400 rounded-md">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead className=" bg-blue-400 ">
                            <tr className=" ">
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Expired;