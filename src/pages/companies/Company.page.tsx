import "./company.scss";
import httpModule from "../../helpers/http.module";
import { useEffect, useState } from "react";
import { ICompany } from "../../types/global.typing";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Company = () => {
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const redirect = useNavigate();

  useEffect(() => {
    setLoading(true);
    httpModule
      .get<ICompany[]>("/Company/Get")
      .then((response) => {
        setCompanies(response.data);
        setLoading(false);
      })
      .catch((error) => {
        alert("Error occoured on loading companies");
        setLoading(false);
      });
  }, []);

  return <div className="content companies">
    <div className="heading">
      <h2>Companies</h2>
      <Button variant="outlined" onClick={()=>redirect("/companies/add")}><Add /></Button>
    </div>
  </div>;
};

export default Company;
