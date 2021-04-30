import { Sequence,useVideoConfig } from 'remotion';
import '../assets/font.css';
import { Grow } from './Message/Grow';
import { Reveal,RevealDirection } from './Message/Reveal';

const pageStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	backgroundColor: '#474973',
	color: '#C6D8D3',
	fontFamily: 'Lato, sans-serif',
	fontSize: '8em',
	width: '100%',
	height: '100%',
};

export const Message: React.FC<{}> = ({}) => {
	const videoConfig = useVideoConfig();

	return (
		<div style={pageStyle as React.CSSProperties}>
			<Sequence from={20} durationInFrames={150}>
				<Reveal message="MASK ON &nbsp; 😷" direction={RevealDirection.Left} />
			</Sequence>
			<Sequence from={170} durationInFrames={150}>
				<Reveal
					message="MASK OFF &nbsp; 🤒"
					direction={RevealDirection.Right}
				/>
			</Sequence>
			<Sequence from={320} durationInFrames={90}>
				<Grow message="GET VACCINATED" />
			</Sequence>
			<Sequence from={410} durationInFrames={90}>
				<Grow message="STAY HOME" />
			</Sequence>
			<Sequence from={500} durationInFrames={videoConfig.durationInFrames}>
				<Grow message="#Unite2FightCorona" />
			</Sequence>
		</div>
	);
};
