function isEmpty(para) {
	const element = $(`#${para}`).val();

	if (element == "") {
		$("#warn").removeClass("d-none");
		$("#warn").html(`Please fill the ${para}`);
		$(`#${para}`).addClass("error");
		$(`#${para}`).focus();

		setTimeout(() => {
			$("#warn").addClass("d-none");
		}, 3000);
		return false;
		// break;
	} else $(`#${para}`).removeClass("error");
}

const regName = /^[A-Za-z\s]+$/;
const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
const passwordFormat =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;

const arrayOfId = [
	"address",
	"contactNumber",
	"confirmPwd",
	"pwd",
	"emailId",
	"fullName",
];

const isNameValid = () => {
	const fullName = $("#fullName").val();

	if (!fullName.match(regName)) {
		$("#warn").removeClass("d-none");
		$("#warn").html(`Please enter a valid Name`);
		$(`#fullName`).addClass("error");
		$(`#fullName`).focus();

		setTimeout(() => {
			$("#warn").addClass("d-none");
		}, 3000);
		return false;
	} else {
		$(`#fullName`).removeClass("error");
	}
};
const isPhoneValid = () => {
	const contactNumber = $("#contactNumber").val();
	if (!contactNumber.match(phoneno)) {
		$("#warn").removeClass("d-none");
		$("#warn").html(`Please enter a valid Contact Number`);
		$(`#contactNumber`).addClass("error");
		$(`#contactNumber`).focus();

		setTimeout(() => {
			$("#warn").addClass("d-none");
		}, 3000);
		return false;
	} else {
		$(`#contactNumber`).removeClass("error");
	}
};

const isPasswordValid = () => {
	const pwd = $("#pwd").val();
	const confirmPwd = $("#confirmPwd").val();

	if (!pwd.match(passwordFormat)) {
		$("#warn").removeClass("d-none");
		$("#warn").html(
			`Password Should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character`
		);
		$(`#pwd`).addClass("error");
		$(`#pwd`).focus();

		setTimeout(() => {
			$("#warn").addClass("d-none");
		}, 3000);
		return false;
	} else {
		$(`#pwd`).removeClass("error");
	}
	if (confirmPwd != pwd) {
		$("#warn").removeClass("d-none");
		$("#warn").html(`Confirm password doesn't match with Password`);
		$(`#confirmPwd`).addClass("error");
		$(`#confirmPwd`).focus();

		setTimeout(() => {
			$("#warn").addClass("d-none");
		}, 3000);
		return false;
	} else {
		$(`#confirmPwd`).removeClass("error");
	}
};

const isEmailValid = () => {
	const emailId = $("#emailId").val();
	if (!emailId.match(emailValid)) {
		$("#warn").removeClass("d-none");
		$("#warn").html(`Please enter a valid email`);
		$(`#emailId`).addClass("error");
		$(`#emailId`).focus();

		setTimeout(() => {
			$("#warn").addClass("d-none");
		}, 3000);
		return false;
	} else {
		$(`#emailId`).removeClass("error");
	}
};

// $('#fullName').keypress(isNameValid());
// $('#emailId').keypress(isEmailValid());
// $('#contactNumber').keypress(isPhoneValid());
// $('#pwd').keypress(isPasswordValid());
// $('#confirmPwd').keypress(isPasswordValid());

$("#submitButton").click(function () {
	const regName = /^[A-Za-z\s]+$/;
	const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	const passwordFormat =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm;

	if (
		$("#emailId").val().match(emailValid) &&
		$("#pwd").val().match(passwordFormat) &&
		$("#confirmPwd").val() == $("#pwd").val() &&
		$("#contactNumber").val().match(phoneno) &&
		$("#fullName").val().match(regName) &&
		$("address").val() != ""
	) {
		$("#signIn").removeClass("d-none");
		$("#signIn").html("Form Submiited");
		$("#signIn").css("fontWeight", "bolder");

		setTimeout(() => {
			$("#signIn").addClass("d-none");
		}, 5000);
		const regForm = $("#regForm");
	} else {
		for (let i = 0; i < arrayOfId.length; i++) {
			isEmpty(arrayOfId[i]);
		}

		isPhoneValid();
		isPasswordValid();
		isEmailValid();
		isNameValid();
	}
});
