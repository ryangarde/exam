import styled from 'styled-components';

const StyledTable = styled.table`
	border-collapse: collapse;
	width: 100%;

	thead {
		border-bottom: 1px solid var(--clr-primary);
		min-height: 55px;
	}

	th {
		font-weight: 500;
		text-align: left;
		padding: 13px 10px;
	}

	td {
		padding: 0 10px;
		min-height: 55px;
	}

	tr:not(:last-child) {
		border-bottom: 1px solid #f2f2f2;
	}

	.status {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 80px;
		min-height: 35px;
		border-radius: 4px;
		padding: 5px 8px;

		&.Inactive {
			color: rgb(255, 4, 4);
			background-color: rgba(255, 4, 4, 0.2);
		}
		&.Available {
			color: rgb(152, 54, 255);
			background-color: rgba(152, 54, 255, 0.2);
		}
		&.Maintenance {
			color: rgb(255, 152, 13);
			background-color: rgba(255, 152, 13, 0.2);
		}
	}

	.icon {
		font-size: 22px;
		color: var(--clr-primary);
		cursor: pointer;
	}

	.small-image {
		width: 60px;
		height: 60px;
		object-fit: contain;
		object-position: center;
	}

	.large-image {
		width: 110px;
		height: 110px;
		object-fit: contain;
		object-position: center;
		padding: 5px;
		border: 1px solid var(--clr-gray);
		border-radius: 6px;
	}

	.tags {
		display: flex;
		column-gap: 7px;
	}

	.tag {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px 10px;
		background-color: #f3f4f8;
		border-radius: 4px;
		min-width: 60px;
	}
`;

const TableWrapper = styled.div`
	border: 1px solid var(--clr-primary);
	border-radius: 6px;
	background-color: #fff;
`;

const Table = ({ children }) => {
	return (
		<TableWrapper>
			<StyledTable>{children}</StyledTable>
		</TableWrapper>
	);
};

export default Table;
