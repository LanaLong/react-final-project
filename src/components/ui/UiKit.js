import React from "react";
import Button from "@material-ui/core/Button";

const MyLink = props => <Link to="/home" {...props} />;

<Button component={MyLink}>Link</Button>;
