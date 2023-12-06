/* eslint-disable react-refresh/only-export-components */
import { jsPDF } from "jspdf";
const PDF = () => {


    const jspdf = new jsPDF('p', 'pt', 'letter')

    const handleSubmit = (e) => {
        e.preventDefault()
        const val = e.target.txt.value;

        const data = {
            callback: function (jspdf) {
                jspdf.save('demo.pdf')
            },
            margin: [10, 10, 10, 10],
            autoPaging: 'text'
        }

        jspdf.html(val, data)
    }

    return (
        <div>

            <form onSubmit={(e) => handleSubmit(e)}>
                <textarea defaultValue={""} cols={40} rows={10} className="txt bg-slate-400" name="txt" /> <br />
                <button>Generate</button>
            </form>

        </div>
    )
}

export default PDF;