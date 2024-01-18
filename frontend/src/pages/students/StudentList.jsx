import { useEffect , useState } from "react";

const StudentList = () => {
    const [students , setStudents] = useState([]);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
      const fetchStudent = async () => {
        const response = await fetch ('http://localhost:8000/api/students');
        const data = await response.json();
        if (response.ok){
            setStudents(data);
            console.log(data);
            setLoading(false);
        }
      } 

      fetchStudent();
    }, []);

    return (
        <div className="container mx-auto p-6">
          <h2 className="text-2xl font-bold mb-4">Student List</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4 border-b">First Name</th>
                  <th className="py-2 px-4 border-b">Last Name</th>
                  <th className="py-2 px-4 border-b">Gender</th>
                  <th className="py-2 px-4 border-b">Contact</th>
                  <th className="py-2 px-4 border-b">Course</th>
                  <th className="py-2 px-4 border-b">Address</th>
                  <th className="py-2 px-4 border-b">ID Card</th>
                  <th className="py-2 px-4 border-b">Date of Birth</th>
                  <th className="py-2 px-4 border-b">Email</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr  key={student._id}>
                    {loading && <h6>Loading .....</h6>}
                    <td className="py-2 px-4 border-b">{student.firstname}</td>
                    <td className="py-2 px-4 border-b">{student.lastname}</td>
                    <td className="py-2 px-4 border-b">{student.gender}</td>
                    <td className="py-2 px-4 border-b">{student.contact}</td>
                    <td className="py-2 px-4 border-b">{student.course}</td>
                    <td className="py-2 px-4 border-b">{student.address}</td>
                    <td className="py-2 px-4 border-b">{student.id_card}</td>
                    <td className="py-2 px-4 border-b">{new Date(student.dob).toLocaleDateString()}</td>
                    <td className="py-2 px-4 border-b">{student.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}
 
export default StudentList;