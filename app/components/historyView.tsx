export default function historyView () {

    let muckstats = [
        { label: "Result:", cps: "9.8"}, 
        { label: "Result:", cps: "9.8"}, 
        { label: "Result:", cps: "9.8"}, 
        { label: "Result:", cps: "9.8"}, 
    ];
    


    return(

        <div>
                <div>

                    <div>
                        TITLE
                    </div>

                    <div>
                        {muckstats.map((item, index) => (
                            <li key={index} className="flex justify-between py-1">
                                <span className="font-medium">{item.label}</span>
                                <span>{item.cps}</span>
                            </li>
                        ))}
                    </div>

                </div>

        </div>

    )
}