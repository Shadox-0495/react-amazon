import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";

export default function ConfirmModal(props: any) {
	const { title, children, open, setOpen, onConfirm } = props;

	return (
		<>
			<Dialog
				open={open}
				onClose={() => {
					setOpen(false);
				}}
				className="contactMessageDialog"
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{title}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">{children}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							onConfirm();
						}}
						autoFocus
						variant="outlined"
					>
						Yes
					</Button>
					<Button
						onClick={() => {
							setOpen(false);
						}}
						autoFocus
						variant="outlined"
					>
						No
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
