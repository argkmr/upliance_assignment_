import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import mockData from "../utils/userData.json";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Dashboard = () => {
    // const formData = useSelector((state: RootState) => state.formState.formData);
    const users: any = window.localStorage.getItem('USER_ARRAY');
    const usersArray = JSON.parse(users);
    const dashboardArray = [...mockData.userData, ...usersArray]
    const userData: any = localStorage.getItem("user");
    const user = JSON.parse(userData);
    const navigate = useNavigate();

    let mumbai = 0;
    let pune = 0;
    let bangalore = 0;
    let delhi = 0;
    let Kolkata = 0;
    let male = 0;
    let female = 0;

    console.log(dashboardArray)
    dashboardArray.map((user) => {
        // console.log(user);
        if (user.city === "Mumbai") mumbai++;
        if (user.city === "Pune") pune++;
        if (user.city === "Bangalore") bangalore++;
        if (user.city === "Delhi") delhi++;
        if (user.city === "Kolkata") Kolkata++;

        if (user.gender === "Male") male++;
        if (user.gender === "Female") female++;
    })

    const cityArray = [
        {
            "city": "Mumbai",
            "count": mumbai,
        },
        {
            "city": "Pune",
            "count": pune,
        },
        {
            "city": "Bangalore",
            "count": bangalore,
        },
        {
            "city": "Delhi",
            "count": delhi,
        },
        {
            "city": "Kolkata",
            "count": Kolkata,
        }
    ]

    const handleLogout = async () => {
        try {
            await signOut(auth);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="dashboard-container">
            <div className="heading">
                <h2>Welcome {user && user.displayName}!</h2>
                <button onClick={handleLogout}>logout</button>
            </div>
            <div className="charts">
                <div className="bar-chart01">
                    <div className="bar-chart01-heading">Users professional experience</div>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={300}
                            height={300}
                            data={dashboardArray}
                            margin={{
                                right: 30,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="firstName" />
                            <YAxis />
                            <Legend />
                            <Bar dataKey="overallExp" fill="#2563eb" />
                            <Bar dataKey="reactExp" fill="#8b5cf6" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="bar-chart02">
                    <div className="bar-chart02-heading">No. of users living in different cities</div>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={300}
                            height={300}
                            data={cityArray}
                            margin={{
                                right: 30,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="city" />
                            <YAxis />
                            <Legend />
                            <Bar dataKey="count" fill="#2563eb" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Dashboard