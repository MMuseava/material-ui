import { Button, Container, Typography, Paper, Box } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import "./App.css";

const userList = ["Samsung", "Iphone", "Xiomi"];
function App() {
	return (
		<Container>
			<Typography variant="h3" mb={4}>
				This is H1 Header
			</Typography>
			<Button variant="contained" color="secondary" fullWidth={true}>
				Hello word
			</Button>
			<Button href="#" size="large" variant="outlined">
				Link
			</Button>
			<Button
				color="warning"
				variant="contained"
				size="large"
				startIcon={<DirectionsRunIcon />}
			>
				Janara
			</Button>
			<IconButton color="error">
				<DeleteIcon />
			</IconButton>
			<br />
			<Box sx={{ display: "flex", gap: 4, m: 5 }}>
				{userList.map((el) => {
					return (
						<Box>
							<Paper elevation={3} sx={{ height: 100 }}>
								{" "}
								<Typography variant="h6">{el}</Typography>{" "}
							</Paper>
						</Box>
					);
				})}
			</Box>
		</Container>
	);
}

export default App;
