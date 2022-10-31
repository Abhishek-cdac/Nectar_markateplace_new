import React, { useState } from "react";
import dummyData from "../containers/Dummydata";
import Card2 from "../Components/Header/card2";
import Footer from "./Footer";
import EnquiryForm from "./EnquiryForm";
import Products from "./Products";
import HostingServices from "./HostingServices";

function TelecomeServices() {
  const [checkedvalue, setCheckedValue] = useState("organization");

  const handleToggle = (e) => {
    setCheckedValue(e.target.value);
    console.log("togglevalue", e.target.value);
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <h2 style={{ color: "#1291C9" }}>Telecom Services</h2>
            <p style={{ color: "#1291C9" }}>
              It is web-based Task Management Tool. It is easily deployable to
              aid online product for task management with an extensive database.
            </p>
          </div>
          <div className="col-lg-2"></div>
          <div className="col-lg-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGkrB4pFXFYwu21I3Sb8hv8LdwyykL_v3Pg&usqp=CAU"
              alt=""
            />
          </div>
        </div>
        <div className="telecomeservicetabs mt-5">
          <div className="row">
            <div className="col-12 col-lg-3 col-md-5">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  defaultChecked
                  value="organization"
                  checked={checkedvalue === "organization"}
                  onChange={handleToggle}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Organizations and Services
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="products"
                  checked={checkedvalue === "products"}
                  onChange={handleToggle}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Products
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-2 col-md-3">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  value="hosting"
                  checked={checkedvalue === "hosting"}
                  onChange={handleToggle}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Hosting Services
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      {checkedvalue == "organization" ? (
        <>
          <div className="nectarproduct">
            <div className="row">
              {/* <div>{!value ? <HostingServices /> : <Footer />}</div> */}
              <div className="col-lg-4">
                <div class="card text-center" style={{ borderRadius: "3px" }}>
                  <div class="card-body">
                    <img
                      style={{ width: "100%" }}
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYIAAACDCAMAAAC3D+yqAAABHVBMVEX///9JSUpGRkc/P0BDQ0TvZiY7OzzwaCX6zb7wYADWOkXVOEY1NTZBQULtXBL2u6fTKkH77/BhYWLU1NXw8PDh4eLWMz2kpKTigIT5+flPT0/FxcaEhIUyMjPq6uqxsbKSkpJXV1hra2zZPkLkUjPrXyriTzbLy8voWi7dRjzbQj9nZ2jnWDDhTTjeSDusrK16enuMjI3onqTlSBbgPx6dnZ3fPCHcNia7u7smJijpbk/iYVjrWhfoUx3kTCPhRSjnj43xv77ZMjD33d3zzc/TGyzrVAjaOTTdaHLZVGHRHjbnmqLvuLncVVwbGx3hd3v0poz84dXvd0fkhInzhlbykG/0sJ372s3VGyHwhGD3xLbxnojnalLwczjrqa81yPz1AAAI4klEQVR4nO2c/2OTSBbAGWZ2rApVCSSSBAK4muultUQXpWu92+te09vuuq57e7rf//8/42beA0KSpqaamqV9H/0hhWF4zAdm3kxKDYMgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgmsbWzW3gUPES+AfwT+C54mjnxVf/8jcd5xVm6+aNGzc+UzzU/E2xu7v7ueLRo0d7e3uPHz/e2dk5OTp6/fWmI72yLCjYRQVoYA8M/F1z/JqehMthVQUPHrTb9CBcCqsrePDg+N+bjvZKsnQs+Hw6FpQKbpGDy6BQcDgpeIp8oXn27NlzyIlOCgW3Tu9tOt4rCCrYvnNema+fnJyggvZ/PlVc14hVFCjuH4GC26fUFa2dFRUYT45Awe1vPkVQ14tVFRhftUHBKWWm62ZlBcYtUHD328uP6ZqxuoLv2loB9URrZ3UF/jEouH3WPtd1w/kNl76eEaqTvKeItx+No/wD6/dYHMes9YFHr87qCoxXoODuWVMDHlgBq7dHqjZ01hTiEtzvLStIzxPtjQJuC979wBN4lmma1l9Kwev2UgVdkzER1zb0BWPB8EKR+MbFnhvXYozJaHmBllRBMGY65591KR6c4C+l4P75ChjvTzdoBfxCj0EaBN+H7y82BRSc175MB2VyK1laonUQHKRL9zZQAbMG1YYLK9ANaq1VQS7VfpHkveU3emQz0V+6t4kKWFDFe2EFQ7luBal4Xyekw75qCky7HJIvrCCz160gVjHx/fNq8AN25RQwUbbIvALfX+gOZjeNVA2WO7d/sQupbTtLQf0IUJDP7Z6pUT95cwrqJZqpgPExbphRMOzHtm2OOrUW9jLHtO1uik3UGujyzEySsVftF1YgnQ62SCdJkky1ep8HvFdUMVWQq72qJb1+1+ZxBmfpJSlmQ2m/NY1C2CLuF3ma21MhqCJxmpZDWAhBxeURDVSAQzI2ak2B51gCcxNZ3ZORZcMmIbv6Ehmmj+pnW+rOyEtxvzqGgZOxFCIIPaF6K1mmulMFA7XXyrNAn8bktgebiq5RHdeaiUJYDlS5H+ApmDo2ggqzMigLZxvNU2COoB0tuMCpAszO1SRH7yu65pFkJaaePcRm9TNXN3uvMAL7pb6rVerC+ABEy3LAqCngMA6VRwjVgAOrqtLWXc1QTk9hWtrioBYD102eyCpOO9YbmqdADlNsbB1+pSDk2o500q5upwD96I/6zlf/za4qnhZtbnMuVYMN9bXbFodmEzpx1wqYwFYszzmnQJ1PSvigz+v34+Ix4lLNCzyoypbqH2hVGluclyW4HoQgKN5NRrooTHGap0ANfdAXCT0VqhRAagi9SYcX+1oWXHrP971+gA+N39MNIL1iaalvSdHxXA+eq8AtFOhGtoNqojWvgHdCF+YCJq5IaAdi7MNCUqIr4lHohhEvQ/R9PRaIFEtAUPoRNDx9FfpeaaQCCBoWDUoFIVwGdt9l0gMPCza9ERZDtE5OaklpnkNv7IKYXqlAdlw3PCMjGqA/vREKSiijFdgRFIW4BGYKMPDj0wgKioxIByVQb09i7I1UYOTgwOpVCvZV65jF4pFuKW1DlN1LjTkFM/XuFy07l2HOKQhgo26+YrioKcj4tHZPl8D5Qk2BX7tVfI7xNVOBEWE3H44LBXDPdUdAkahjGwxmKzhLge/6cEgHFZhzK54XUAC9YXk4dJbQ8DUFLejBHIhTb9b1NlSBAd236ZRPQYqLlQjefnC1cm4VdV6Bm/djhgNm+RSY8ewhF1AAjTqqxYozupoCOK4WpxbWVAU+Zt8mqykwZcVBD1v7fAXumEtRzfY+XoH+aJbjOPiIy08zCngVpzVqroJiSGY1BaYz7JUMi2de9mYrmFEQMg4ppGWt6SkYVTd+ESv6mO+I+KCKsxc2WIGaFdUUZIttF+qrteeW8GYUxNqbiHqe65hrUYDdIR7miyo7qikIg8VHs7kKjDGfKsBeZ/YymLnYnnUFMDMT8HlNCjBrxSjwIczL2sukFGYRs2lagxUYjqgUFO2N2X+ul9rK3B3SQn+cYJ6PqnCuAIlsOq334xW4klVZv+6UWABndWrN3uGVGcMbJzrgJitwcQEMFAxw5aUzHHZiKeB7tRAncOOWN1BJDzYMTE7N0cAZFC3adfXX72I9YwE+mPYob+UOzpNhK9iwO5HOlVzMplNVJJW2rattsgKjFVQKjAQmtraUkGEewFIFOBC4yYJSPiaFXPCw0CGcLmZFWsH4IxX43TIzg1lBMUWAGRuzBfwOQB6UQQm4QZqmQK/B1Cev+1alwJ9ZFoWeyIiqrInJEfZEUVFKdxdOMZlgMik6oowvKvBlqQAGjwUFOqZSgeF2eXVK3i1WRdyg2AK/qTIIpoup0vnkGdHhDysUvX/abt+9e+YrBp7F7aA+4e1btm0VWU8mpRCmKXjglNczUJtM/e3A9Ju11MIyqW+EXdgr5cBwJFTjM2kv/D5QJ+C2BC+JOtsBbMsD27YDUNBSMVnjsrAfWbpSVasVVctMw4ALHQWDVKgVW/ZMVLHqkYLLV/AGX/H4cYWif/4XOPMtj7CTZTPB5lmWlTmen4/191odb7rbz/tJkkb1324YqkJpUQb2DnysV1fjD7Js4avoltqJ30D0siyCD16mwbs83M+y2vTDhSjGef3bUbeTJklUFWplaT0qX1WQXej77A8DFWy/ufwzEUv4CV90+t+m47jG3LkJr/tNtjYdyPXFRwWfTd5tOpLryw/b+NLr5O2mI7m+lO8dHz58+4b+yMFGeDcpX/1++fTpWe8dPz/SHB8fn2owKd2aTJ5+8fxneu1pPdyZrPj2fW12vHXz4e6jnfaTDYd+ZXg7WelvUMwo2NYKTkjButiaHJKCDXPvpwkp2DTvfpkcvpz9s1x7s4NBe2EseHxECtbKvV9/++VL5HfkRcUr5BsFKnj3x49f/v7i1Z8bjpkgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgiEX+D1JWL8s60JRlAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <hr />
                    <button
                      style={{ borderRadius: "3px", fontSize: "15px" }}
                      href="#"
                      class="btn btn-primary"
                    >
                      Explore Nectar Services
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="mt-5" style={{opacity:"0.9"}}>Partner With Nectar Infotel</h2>
          </div>
          <div className="partnerproduct">
            <div className="row">
              {dummyData?.partnerCardData?.map((img) => (
                <div className="col-lg-4">
                  <div class="card text-center" style={{ borderRadius: "3px" }}>
                    <div class="card-body">
                      <img
                        style={{ width: "50%", height: "125px" }}
                        src={img.image}
                        alt=""
                      />
                      <hr />
                      <button
                        style={{
                          borderRadius: "3px",
                          float: "left",
                          // width: "40%",
                          fontSize: "15px",
                        }}
                        href="#"
                        class="btn btn-primary"
                      >
                        Explore Services
                      </button>
                      <button
                        style={{
                          borderRadius: "3px",
                          float: "right",
                          // width: "40%",
                          fontSize: "15px",
                        }}
                        href="#"
                        class="btn btn-primary"
                      >
                        Explore Products
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <EnquiryForm />
              <div className="landing_card2 mt-5">
                <h1>Explore Nectar's related apps</h1>
                <Card2 />
                <div style={{ marginBottom: "10%" }}></div>
              </div>
            </div>
          </div>
        </>
      ) : checkedvalue == "products" ? (
        <Products />
      ) : (
        <HostingServices />
      )}
    </>
  );
}

export default TelecomeServices;
