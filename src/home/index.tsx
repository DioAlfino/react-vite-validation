import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Home: React.FC = () => {
  const [userData, setUserData] = useState<FormData[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <Navbar />
      <div>
        {userData && (
          <div>
            {userData.map((user, index) => (
              <div key={index}>
                <div className="grid grid-cols-3 gap-4">
                  <div className="border p-4">
                    <p className="font-semibold">Name</p>
                    {user.name}
                  </div>
                  <div className="border p-4">
                    <p className="font-semibold">Email</p>
                    {user.email}
                  </div>
                  <div className="border p-4">
                    <p className="font-semibold">Password</p>
                    {user.password}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
