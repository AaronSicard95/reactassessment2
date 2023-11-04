import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";


//404
function FourOhFour({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Whoops! Friendly 404 here.
            </h3>
            <br/>
            <h2>Looks like you're trying to access a page that doesn't exist</h2>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default FourOhFour;
