//@flow
import { Link, navigate } from '@reach/router';
import { Formik } from 'formik';
import * as React from 'react';
import Button from '../../../components/Form/Button';
import FieldBig from '../../../components/Form/Field';
import { Consume } from '../../../components/LayoutProvider';
import {
	email,
	isNotUndefined,
	withFadeEffect
} from '../../../components/tools';
import { ROUTES } from '../../../routes';
type Props = {
	fade: boolean
}
function Login({fade}: Props) {
	const validate = (values: Object): Object => {
		let errors: Object = {};
		
		let required = '* Field is required';
		
		if (isNotUndefined(values.password)) {
			if (values.password === "") {
				errors.password = required
			}
		}
		
		if (isNotUndefined(values.email)) {
			if (values.email === "") {
				errors.email = required
			}
			
			if (email(values.email)) {
				errors.email = "* Please enter a valid email."
			}
		}
		return errors;
	};
	
	const login = (values: Object, actions: Object) => {
		return navigate(ROUTES.PROFILE.DASHBOARD);
	};
	
	return (
		<Consume consume={{
			withHeader: true,
			isAuthenticated: false
		}}>
			<section className="login-section">
				<Formik
					initialValues={{
						email: "",
						password: ""
					}}
					validate={(values) => validate(values)}
					onSubmit={(values, actions) => login(values, actions)}
				>
					{form => (
						<form onSubmit={form.handleSubmit} className="login">
							<fieldset>
								<h2 className={`section-title ${fade ? 'fadeInBottom' : ''}`}>Happy to see you again <span role="img" aria-labelledby="palm">👋</span></h2>
								{/* <FieldBig name="email" className={`special ${fade ? 'fadeInBottom' : ''}`} placeholder="Email" type="email" {...form}>
									<EmailBorder/>
								</FieldBig> */}
								<FieldBig className="login_fieldset" name="email" placeholder="Your company or organization name" type="email" {...form}/>
								{/* <FieldBig name="password" className="special" placeholder="Password" type="password" {...form}>
									<PasswordBorder/>
									<Qmark/>
								</FieldBig> */}
								<FieldBig className="login_fieldset" name="password" placeholder="Password ( 6+ characters )" minLength={6} type="password" {...form}/>
								<Button className="login_btn" label="LOGIN" isLoading={form.isSubmitting}/>
							</fieldset>
							<p className="already-have-account">
								Don’t have an account yet ?
								<Link to={ROUTES.AUTH.USER_REGISTER}>Register</Link>
							</p>
						</form>
					)}
				</Formik>
			</section>
		</Consume>
	)
}

const EmailBorder = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="401.461" height="75.668" viewBox="0 0 401.461 75.668">
		<g id="Path_503" data-name="Path 503" transform="translate(-3793.583 290.668)" fill="#fff">
			<path fill="none" d="M 3940.839111328125 -216.9999847412109 C 3940.832275390625 -216.9999847412109 3940.827392578125 -216.9999847412109 3940.820556640625 -216.9999847412109 C 3914.4072265625 -217.0000915527344 3891.782958984375 -217.2565612792969 3873.576416015625 -217.7622985839844 C 3857.99072265625 -218.1951904296875 3845.195556640625 -218.8240356445313 3835.546142578125 -219.6312408447266 C 3817.666748046875 -221.1270294189453 3813.421875 -222.9553985595703 3810.322509765625 -224.2904510498047 C 3810.02099609375 -224.4203491210938 3809.736083984375 -224.5430908203125 3809.458740234375 -224.6556091308594 C 3806.525146484375 -225.8464050292969 3803.275146484375 -229.8673553466797 3800.5419921875 -235.6875152587891 C 3797.693115234375 -241.7544555664063 3795.95068359375 -248.6033477783203 3795.635986328125 -254.9725646972656 C 3795.35498046875 -260.6517333984375 3796.200927734375 -265.7371520996094 3798.14990234375 -270.0876159667969 C 3800.434814453125 -275.1875610351563 3804.17919921875 -279.1342468261719 3809.279541015625 -281.8180236816406 C 3811.7109375 -283.0973510742188 3816.751708984375 -284.1603088378906 3824.68994140625 -285.0677795410156 C 3831.871826171875 -285.8887329101563 3841.481201171875 -286.5831909179688 3853.251220703125 -287.1319274902344 C 3874.799560546875 -288.1365661621094 3904.185546875 -288.6675720214844 3938.232177734375 -288.6675720214844 C 3989.477783203125 -288.6675720214844 4048.987060546875 -287.4706115722656 4097.419921875 -285.4658203125 C 4121.70166015625 -284.4607238769531 4142.3984375 -283.2775573730469 4157.27294921875 -282.044189453125 C 4179.53515625 -280.1983032226563 4184.333984375 -278.6579284667969 4186.00732421875 -277.6598205566406 C 4189.0205078125 -275.8621520996094 4191.09814453125 -273.0158386230469 4192.1826171875 -269.1998901367188 C 4193.103515625 -265.9588317871094 4193.287109375 -262.061767578125 4192.72900390625 -257.616943359375 C 4191.8134765625 -250.3267211914063 4188.923828125 -241.8833465576172 4184.80126953125 -234.4517211914063 C 4182.8623046875 -230.9555053710938 4180.73876953125 -227.8813018798828 4178.6611328125 -225.5613555908203 C 4176.3125 -222.9389801025391 4174.05224609375 -221.2926177978516 4171.943359375 -220.6679229736328 L 4171.68994140625 -220.5927734375 L 4171.42529296875 -220.5861968994141 C 4075.800537109375 -218.2065887451172 3998.218994140625 -216.9999847412109 3940.839111328125 -216.9999847412109 Z" stroke="none"/>
			<path className="border" d="M 3938.232177734375 -286.6675415039063 C 3873.55810546875 -286.6676635742188 3819.212890625 -284.7848510742188 3810.2109375 -280.048095703125 C 3786.6015625 -267.6250610351563 3801.78369140625 -229.929443359375 3810.2109375 -226.5087585449219 C 3816.07763671875 -224.1276245117188 3821.62890625 -219.0000305175781 3940.820068359375 -219.0000305175781 C 3992.8544921875 -219.0000305175781 4066.533447265625 -219.9766540527344 4171.37548828125 -222.5856018066406 C 4182.359375 -225.8390502929688 4200.60693359375 -266.6212768554688 4184.982421875 -275.9422607421875 C 4175.3154296875 -281.7092895507813 4043.178955078125 -286.6674194335938 3938.232177734375 -286.6675415039063 M 3938.2265625 -290.6675415039063 L 3938.2265625 -286.6675415039063 L 3938.229248046875 -290.6675415039063 C 3989.50390625 -290.66748046875 4049.04443359375 -289.4699401855469 4097.5029296875 -287.4640502929688 C 4121.8115234375 -286.4578247070313 4142.53662109375 -285.27294921875 4157.4384765625 -284.0373229980469 C 4179.7314453125 -282.1889343261719 4184.908203125 -280.6444396972656 4187.03173828125 -279.37744140625 C 4188.8232421875 -278.3085327148438 4190.34814453125 -276.8962097167969 4191.5634765625 -275.1795654296875 C 4192.6708984375 -273.6152648925781 4193.5263671875 -271.7873840332031 4194.1064453125 -269.7465515136719 C 4195.10107421875 -266.2455444335938 4195.3056640625 -262.0806579589844 4194.71337890625 -257.36767578125 C 4193.76708984375 -249.8339233398438 4190.7919921875 -241.1278381347656 4186.55029296875 -233.4815979003906 C 4183.9296875 -228.756591796875 4178.6201171875 -220.5597839355469 4172.51171875 -218.7503356933594 L 4172.00390625 -218.6000061035156 L 4171.474609375 -218.5868225097656 C 4075.830810546875 -216.2067565917969 3998.227294921875 -215 3940.820068359375 -215 C 3914.388671875 -215 3891.745849609375 -215.2566528320313 3873.52099609375 -215.7628173828125 C 3857.8984375 -216.19677734375 3845.06591796875 -216.8276672363281 3835.3798828125 -217.6380004882813 C 3827.43603515625 -218.3026123046875 3821.4453125 -219.0912170410156 3817.06640625 -220.0489807128906 C 3813.099609375 -220.9166564941406 3811.037109375 -221.804931640625 3809.53125 -222.4535522460938 C 3809.23974609375 -222.5791625976563 3808.96435546875 -222.6978759765625 3808.70654296875 -222.8024291992188 C 3804.05908203125 -224.6889953613281 3800.4619140625 -231.1524963378906 3798.73193359375 -234.8374328613281 C 3795.7744140625 -241.134765625 3793.9658203125 -248.25048828125 3793.63818359375 -254.8738250732422 C 3793.341796875 -260.8707885742188 3794.24560546875 -266.2645263671875 3796.32470703125 -270.9053344726563 C 3798.796875 -276.4236450195313 3802.84228515625 -280.6907348632813 3808.34814453125 -283.5879516601563 C 3811.43896484375 -285.2141723632813 3819.4462890625 -287.557861328125 3853.1572265625 -289.129638671875 C 3874.73583984375 -290.1357727050781 3904.152587890625 -290.6675415039063 3938.2265625 -290.6675415039063 Z" fill="#000" stroke="none"/>
		</g>
	</svg>
);

const PasswordBorder = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width="449.514" height="75.078" viewBox="0 0 449.514 75.078">
		<g id="Path_524" data-name="Path 524" transform="translate(-3769.537 284.988)" fill="#fff">
			<path fill="none" d="M 3983.16845703125 -211.9101715087891 C 3947.635498046875 -211.9101715087891 3915.6884765625 -212.2494201660156 3888.215576171875 -212.9184722900391 C 3864.884521484375 -213.4867095947266 3844.5888671875 -214.2961273193359 3827.892333984375 -215.3241729736328 C 3814.31201171875 -216.1604156494141 3803.251708984375 -217.1291809082031 3795.0185546875 -218.2034759521484 C 3788.62158203125 -219.0381774902344 3784.173095703125 -219.9126434326172 3782.1533203125 -220.732421875 C 3780.7568359375 -221.2993011474609 3779.403076171875 -222.5216522216797 3778.129638671875 -224.3656463623047 C 3777.010498046875 -225.9864196777344 3775.9736328125 -228.0434112548828 3775.048095703125 -230.4794158935547 C 3773.12841796875 -235.5309448242188 3771.90673828125 -241.6373596191406 3771.6083984375 -247.6737670898438 C 3771.254150390625 -254.8374786376953 3772.21826171875 -261.568115234375 3774.39599609375 -267.1381225585938 C 3775.6552734375 -270.3587646484375 3777.32763671875 -273.2245178222656 3779.3662109375 -275.6558837890625 C 3781.59521484375 -278.3142395019531 3784.2890625 -280.4850158691406 3787.373046875 -282.1078186035156 C 3788.56103515625 -282.7329406738281 3790.11669921875 -282.9878845214844 3792.742431640625 -282.9878845214844 C 3795.656982421875 -282.9878845214844 3799.909423828125 -282.6682434082031 3806.3466796875 -282.1842956542969 C 3823.033935546875 -280.9298706054688 3854.095703125 -278.5948791503906 3912.999755859375 -277.9421081542969 C 3918.97998046875 -277.8758239746094 3925.4580078125 -277.8422241210938 3932.25439453125 -277.8422241210938 C 3967.4599609375 -277.8422241210938 4007.472900390625 -278.7125244140625 4046.16845703125 -279.5541687011719 C 4080.171875 -280.293701171875 4112.28955078125 -280.9923095703125 4137.14404296875 -280.9923095703125 C 4151.10595703125 -280.9923095703125 4161.68603515625 -280.7725219726563 4169.48779296875 -280.3205261230469 C 4173.740234375 -280.0741882324219 4177.2236328125 -279.7512512207031 4179.841796875 -279.3606567382813 C 4182.85693359375 -278.9107666015625 4184.81640625 -278.3703002929688 4186.00732421875 -277.6598205566406 C 4189.390625 -275.6414794921875 4193.10791015625 -272.0607604980469 4197.0556640625 -267.0170593261719 C 4200.58203125 -262.5126647949219 4204.1181640625 -257.0402526855469 4207.28271484375 -251.191650390625 C 4210.40673828125 -245.4184722900391 4212.966796875 -239.6557159423828 4214.68701171875 -234.5264739990234 C 4216.59375 -228.8409423828125 4217.35400390625 -224.3131256103516 4216.94677734375 -221.0687103271484 C 4216.76904296875 -219.6564788818359 4216.361328125 -218.4629974365234 4215.73486328125 -217.5214691162109 C 4215.005859375 -216.4254150390625 4213.95947265625 -215.6502380371094 4212.70849609375 -215.2798309326172 L 4212.455078125 -215.2046508789063 L 4212.1904296875 -215.1981201171875 C 4124.5205078125 -213.016357421875 4047.46630859375 -211.9101715087891 3983.16845703125 -211.9101715087891 Z" stroke="none"/>
			<path className="border" d="M 3792.74267578125 -280.9879150390625 C 3790.53662109375 -280.9879760742188 3789.17529296875 -280.7958984375 3788.3046875 -280.337890625 C 3764.6953125 -267.9148559570313 3774.478515625 -226.0062255859375 3782.9052734375 -222.5855712890625 C 3788.99853515625 -220.1123657226563 3830.35009765625 -213.9101257324219 3983.168212890625 -213.9101257324219 C 4041.710205078125 -213.9101257324219 4116.587890625 -214.819580078125 4212.140625 -217.1974487304688 C 4223.125 -220.4508972167969 4200.60693359375 -266.6212768554688 4184.982421875 -275.9422607421875 C 4181.1533203125 -278.2266845703125 4163.1298828125 -278.9923095703125 4137.14453125 -278.9923095703125 C 4084.40869140625 -278.9923095703125 3998.834228515625 -275.84228515625 3932.255126953125 -275.84228515625 C 3925.62255859375 -275.84228515625 3919.181640625 -275.87353515625 3912.9775390625 -275.9422607421875 C 3831.38525390625 -276.8463745117188 3802.982421875 -280.9874877929688 3792.74267578125 -280.9879150390625 M 3792.740234375 -284.9879150390625 L 3792.740234375 -280.9879150390625 L 3792.7412109375 -284.9879150390625 C 3795.7314453125 -284.98779296875 3800.0126953125 -284.6659545898438 3806.49267578125 -284.1787719726563 C 3823.1572265625 -282.926025390625 3854.1767578125 -280.5940856933594 3913.021728515625 -279.9420166015625 C 3918.9951171875 -279.8758544921875 3925.46630859375 -279.84228515625 3932.255126953125 -279.84228515625 C 3967.43896484375 -279.84228515625 4007.440673828125 -280.7123413085938 4046.12548828125 -281.5537109375 C 4080.139892578125 -282.2935180664063 4112.267578125 -282.9922790527344 4137.14453125 -282.9922790527344 C 4151.1455078125 -282.9922790527344 4161.7626953125 -282.771484375 4169.603515625 -282.3171997070313 C 4181.8037109375 -281.6104125976563 4185.259765625 -280.4345092773438 4187.03173828125 -279.3773803710938 C 4190.62744140625 -277.2322692871094 4194.5302734375 -273.4884643554688 4198.630859375 -268.2498779296875 C 4202.224609375 -263.6585693359375 4205.82470703125 -258.0890808105469 4209.0419921875 -252.1434631347656 C 4212.2197265625 -246.2708435058594 4214.8271484375 -240.3988952636719 4216.58349609375 -235.1624755859375 C 4218.58642578125 -229.1899108886719 4219.3759765625 -224.3641967773438 4218.9306640625 -220.8194580078125 C 4218.71484375 -219.097412109375 4218.19970703125 -217.6150817871094 4217.400390625 -216.41357421875 C 4216.408203125 -214.9225158691406 4214.982421875 -213.8673400878906 4213.2763671875 -213.3621520996094 L 4212.76904296875 -213.2118225097656 L 4212.240234375 -213.1986999511719 C 4124.55322265625 -211.0166015625 4047.482421875 -209.91015625 3983.168212890625 -209.91015625 C 3947.618896484375 -209.91015625 3915.65576171875 -210.2495727539063 3888.16650390625 -210.9190979003906 C 3864.81103515625 -211.4878845214844 3844.490234375 -212.29833984375 3827.76904296875 -213.3279724121094 C 3814.1435546875 -214.1669616699219 3803.03759765625 -215.1400756835938 3794.75927734375 -216.2202758789063 C 3788.10205078125 -217.0889587402344 3783.607421875 -217.9835815429688 3781.40087890625 -218.8792724609375 C 3779.63671875 -219.5953369140625 3777.982421875 -221.0588989257813 3776.48388671875 -223.2293395996094 C 3775.2734375 -224.9824523925781 3774.1611328125 -227.1827697753906 3773.17822265625 -229.7691345214844 C 3771.1865234375 -235.011474609375 3769.91943359375 -241.3351440429688 3769.61083984375 -247.5753326416016 C 3769.2431640625 -255.0190277099609 3770.25341796875 -262.03564453125 3772.53369140625 -267.8665771484375 C 3773.8720703125 -271.2898559570313 3775.6552734375 -274.3428955078125 3777.833984375 -276.9409790039063 C 3780.23046875 -279.7994689941406 3783.126953125 -282.1333312988281 3786.44189453125 -283.8777770996094 C 3787.9404296875 -284.666259765625 3789.76513671875 -284.9879150390625 3792.740234375 -284.9879150390625 Z" fill="#000" stroke="none"/>
		</g>
	</svg>
);

const Qmark = () => (
	<svg className="q-mark" xmlns="http://www.w3.org/2000/svg" width="21.434" height="21.434" viewBox="0 0 21.434 21.434">
		<g id="Group_2349" data-name="Group 2349" transform="translate(-876 -562)">
			<g id="Group_967" data-name="Group 967" transform="translate(384 313)" opacity="0.06">
				<path id="Path_397" data-name="Path 397" d="M10.717,0A10.717,10.717,0,1,0,21.434,10.717,10.729,10.729,0,0,0,10.717,0Zm0,0" transform="translate(492 249)"/>
			</g>
			<text id="Spam" transform="translate(883 577)" fill="#060f41" fontSize="14" fontFamily="Gilroy, sans-serif"><tspan x="0" y="0">?</tspan></text>
		</g>
	</svg>
);

export default withFadeEffect(Login);