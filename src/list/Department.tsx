import { useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const Department = () => {
  const [data, setData] = useState<any[]>([]);
  const [isTrue, setIsTrue] = useState<boolean>(false);
  const [colaps1, setColaps1] = useState<boolean>(true);
  const [checked, setChecked] = useState<boolean[]>([false, false, false]);


  useEffect(() => {
    fetch("/department.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsTrue(true);
      });
  }, []);

  const list1 = data[0];

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], event.target.checked]);
  };

  const children = (
    <div>
      { isTrue &&
        <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        <FormControlLabel
          label={list1.sub_departments[0]}
          control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
        />
        <FormControlLabel
          label={list1.sub_departments[1]}
          control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
        />
        <FormControlLabel
          label={list1.sub_departments[2]}
          control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
        />
      </Box>
      }
    </div>
  );

  return (
    <div className="my-10">
      {isTrue ? (
        <div className="flex gap-3">
          <div className="mt-[6px]" onClick={() => setColaps1(!colaps1)}>
            {colaps1 ? <RemoveIcon /> : <AddIcon />}
          </div>
          <div>
          <FormControlLabel
            label={list1.department}
            control={
              <Checkbox
                checked={checked[0] && checked[1] && checked[2]}
                onChange={handleChange1}
              />
            }
          />
          {colaps1 && children}
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Department;
