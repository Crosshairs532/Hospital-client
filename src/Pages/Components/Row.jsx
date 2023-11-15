

const Row = ({ doctor, ind }) => {
    const { _id, name, department } = doctor;
    return (

        <tr className="bg-base-200">
            <th>{ind + 1}</th>
            <td>{name}</td>
            <td>{_id}</td>
            <td>{department}</td>
            <td><button className=" btn-outline btn "> view details</button></td>
        </tr>


    );
};

export default Row;