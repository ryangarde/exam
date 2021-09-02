import styled from 'styled-components';

const StyledDropdown = styled.div`
	position: relative;

	&:hover .dropdown-menu {
		display: block;
	}

	.dropdown-menu {
		position: absolute;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		min-width: 200px;
		/* box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); */
		box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
		display: none;
		background-color: #fff;
		border-radius: 6px;
		z-index: 100;
	}

	.image-tags {
		display: flex;
		column-gap: 5px;
	}

	.image-tag {
		display: flex;
		position: relative;
		column-gap: 4px;
		background-color: var(--clr-primary);
		border-radius: 100px;
		min-width: 100px;
		color: #fff;
		padding: 3px;
		padding-right: 30px;

		img {
			width: 27px;
			height: 27px;
			border-radius: 50%;
		}
	}

	.image-tag-close {
		position: absolute;
		top: 50%;
		right: 3px;
		transform: translateY(-50%);
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		background-color: #7c26d8;
		border-radius: 50%;

		span {
			font-size: 13px;
		}
	}
`;

const Dropdown = ({ tags, children, toggleButton, ...props }) => {
	return (
		<StyledDropdown {...props}>
			<div className="dropdown-btn">{toggleButton}</div>
			<div className="dropdown-menu">
				<div className="image-tags p-2 border-b border-sold border-gray-300">
					{tags.map((tag) => (
						<div className="image-tag">
							<img src={tag.image} alt="" />
							<div>{tag.name}</div>
							<div className="image-tag-close">
								<span className="mdi mdi-close"></span>
							</div>
						</div>
					))}
				</div>

				{children}
			</div>
		</StyledDropdown>
	);
};

export default Dropdown;
