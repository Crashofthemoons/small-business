{/* <article class="employee">
        <header class="employee__name">
            <h1>Rainu Ittycheriah</h1>
        </header>
        <section class="employee__department">
            Works in the IT department
        </section>
        <section class="employee__computer">
            Currently using a 2015 MacBook Pro
        </section>
    </article> */}


const getEmployeeInfo = () => {
    matchMadeInHeaven.forEach(match => {
        let nameMatch = match.nameId
        let departmentMatch = match.departmentId
        let computerMatch = match.computerId
        // console.log(nameMatch)
        let $employeeArticle = $("<article>")
        $employeeArticle.appendTo($(".main"))

        Employees.forEach(employee => {
            let employeeName = employee.name
            let employeeId = employee.employeeId
            // console.log(employeeName)

            if (nameMatch === employeeId) {
                console.log("name match")
                let $header = $("<h1>")
                $header.text(employeeName).appendTo($employeeArticle)
            }
        })
        Departments.forEach(departments => {
            let departmentName = departments.department
            let departmentId = departments.departmentId
            // console.log(departmentName)

            if (departmentMatch === departmentId) {
                console.log("department match")
                let $departmentSection = $("<section>")
                $departmentSection.text(departmentName).appendTo($employeeArticle)
            }
        })
        Computers.forEach(computers => {
            let computerName = computers.computer
            let computerId = computers.computerId

            if (computerMatch === computerId) {
                console.log("computer match")
                let $computerSection = $("<section>")
                $computerSection.text(computerName).appendTo($employeeArticle)
            }
        })
    })
}

getEmployeeInfo()