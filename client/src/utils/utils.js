import emailjs from "@emailjs/browser";
import axios from "axios";

const sendResume = (formData, setLoading, navigate) => {
	setLoading(true);

	axios
		.post("http://localhost:4000/resume/send", formData, {})
		.then((res) => {
			if (res.data.message) {
				const {
					cover_letter,
					recruiter_email,
					my_email,
					applicant_name,
					resume,
				} = res.data.data;
				emailjs
					.send(
						
                    "service_fl356rn",
                        "template_mn8segk",
						{
							cover_letter,
							applicant_name,
							recruiter_email,
							my_email,
							resume,
						},
						"T10SmDv26sMh95XmM"
					)
					.then((res) => {
						if (res.status === 200) {
							setLoading(false);
							alert("Message sent!");
							navigate("/");
						}
					})
					.catch((err) => console.error(err));
			}
		})
		.catch((err) => console.error(err));
};
export default sendResume;