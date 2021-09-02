import { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import InputField from '../components/InputField';
import Select from '../components/Select';
import Table from '../components/Table';
import faker from 'faker';
import DropdownItem from '../components/DropdownItem';

const Title = styled.div`
	font-size: 28px;
	font-weight: 500;
`;

const Filter = styled.div`
	display: flex;
	position: relative;

	.input {
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}

	.icon {
		position: absolute;
		top: 50%;
		right: 10px;
		transform: translateY(-50%);
		font-size: 20px;
		color: var(--clr-gray);
	}
`;

const FilterButton = styled(Button)`
	background-color: #fff;
	border-top-left-radius: ${(props) => props.borderTopLeftRadius};
	border-top-right-radius: ${(props) => props.borderTopRightRadius};
	border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};
	border-bottom-left-radius: ${(props) => props.borderBottomLeftRadius};

	.icon {
		color: ${(props) => props.color || 'var(--clr-primary)'};
		font-size: 22px;
	}
`;

const Equipment = () => {
	const initialItem = [
		{
			ID: '12345',
			EquipmentName: 'Fridge compressor',
			Image: 'fridge-compressor.jpg',
			Category: 'Industrial Equipment',
			Status: 'Inactive',
			Expand: false,
		},
		{
			ID: '12345',
			EquipmentName: 'LCD Monitor',
			Image: 'lcd-monitor.webp',
			Category: 'Business Electronics',
			Status: 'Available',
			Expand: false,
		},
		{
			ID: '12345',
			EquipmentName: 'Samsung Galaxy Tab',
			Image: 'galaxy-tab.webp',
			Category: 'Business Electronics',
			Status: 'Maintenance',
			Expand: false,
		},
		{
			ID: '12345',
			EquipmentName: 'Parts Cleaner',
			Image: 'parts-cleaner.jfif',
			Category: 'Industrial Equipment',
			Status: 'Maintenance',
			Expand: false,
		},
		{
			ID: '12345',
			EquipmentName: 'Lab Table',
			Image: 'lab-table.webp',
			Category: 'Lab Equipment',
			Status: 'Available',
			Expand: false,
		},
	];
	const [items, setItems] = useState(initialItem);

	function toggleExpand(item) {
		setItems(initialItem);
		setItems(
			items.map((i) => {
				if (i === item) {
					item.Expand = !item.Expand;
				}
				return i;
			})
		);
	}

	return (
		<div className="flex-grow">
			<Title>Equipment</Title>
			<br />
			<div className="flex justify-between">
				<div className="flex">
					<Filter>
						<select className="w-16">
							<option>All</option>
						</select>

						<InputField className="input" placeholder="Search equipment names, id ..." width="300px" paddingRight="40px" />
						<span className="icon mdi mdi-magnify"></span>
					</Filter>

					<FilterButton height="41px" width="50px" icon className="ml-4">
						<span className="icon mdi mdi-filter"></span>
					</FilterButton>
				</div>

				<div className="flex">
					<FilterButton
						width="50px"
						color="black"
						className="border border-gray-300 border-solid"
						borderTopRightRadius="0"
						borderBottomRightRadius="0"
						icon
					>
						<span className="icon mdi mdi-format-list-bulleted"></span>
					</FilterButton>
					<FilterButton
						width="50px"
						color="black"
						className="border border-gray-300 border-solid"
						borderTopLeftRadius="0"
						borderBottomLeftRadius="0"
						icon
					>
						<span className="icon mdi mdi-view-dashboard"></span>
					</FilterButton>

					<Button className="bg-white text-black ml-3" width="100px">
						<span className="mdi mdi-export-variant mr-2"></span>
						Export
					</Button>

					<Button className="ml-3">
						<span className="mdi mdi-plus mr-2"></span>
						Add equipment
					</Button>
				</div>
			</div>

			<br />

			<Table>
				<thead>
					<tr>
						<th>
							<input type="checkbox" />
						</th>
						<th>ID</th>
						<th>Equipment Name</th>
						<th>Category</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>

				<tbody>
					{items.map((item, index) => (
						<>
							<tr key={index}>
								<td>
									<input type="checkbox" />
								</td>

								<td>{item.ID}</td>
								<td className="flex items-center gap-x-3 py-2">
									<img src={require(`../assets/images/${item.Image}`).default} className="small-image" alt="" />
									<div>{item.EquipmentName}</div>
								</td>
								<td>{item.Category}</td>
								<td>
									<div className={`status ${item.Status}`}>{item.Status}</div>
								</td>

								<td height="1px">
									<div className="flex w-52 h-full">
										<div className="flex items-center gap-x-3 border-r border-solid border-gray-200 pr-3">
											<span className="icon mdi mdi-pencil-outline"></span>
											<span className="icon mdi mdi-eye-outline"></span>
											<Dropdown
												toggleButton={<span className="icon mdi mdi-account-outline"></span>}
												tags={[
													{
														image: faker.image.avatar(),
														name: 'Shania',
													},
												]}
											>
												<DropdownItem image={faker.image.avatar()}>Jared Owens</DropdownItem>
												<DropdownItem image={faker.image.avatar()}>Tanya Garcia</DropdownItem>
												<DropdownItem image={faker.image.avatar()}>Ashley Reyes</DropdownItem>
												<DropdownItem image={faker.image.avatar()}>Karthik Acharya</DropdownItem>
											</Dropdown>
											<span className="icon mdi mdi-share-variant-outline"></span>
											<span className="icon mdi mdi-trash-can-outline"></span>
										</div>

										<div className="w-8 pl-3 flex items-center">
											{!item.Expand ? (
												<span className="icon mdi mdi-chevron-down" onClick={() => toggleExpand(item)}></span>
											) : (
												<span className="icon mdi mdi-chevron-up" onClick={() => toggleExpand(item)}></span>
											)}
										</div>
									</div>
								</td>
							</tr>
							{item.Expand && (
								<tr>
									<td colSpan={6}>
										<div className="px-10 py-3">
											<div className="flex gap-x-8">
												<div>
													<img src={require(`../assets/images/${item.Image}`).default} className="large-image" alt="" />
												</div>

												<div>
													<div className="mb-1">Equipment Name</div>
													<div className="mb-4">
														<InputField value={item.EquipmentName} />
													</div>

													<div className="mb-1">Location</div>
													<div>
														<Select>
															<option>Singapore Office</option>
														</Select>
													</div>
												</div>

												<div>
													<div className="flex gap-x-8 mb-4">
														<div>
															<div className="mb-1">Category</div>
															<Select value={item.Category}>
																<option value={item.Category}>{item.Category}</option>
															</Select>
														</div>
														<div>
															<div className="mb-1">Sub-category</div>
															<Select value="Furniture">
																<option value="Furniture">Furniture</option>
															</Select>
														</div>
													</div>

													<div>
														<div className="mb-1">Tags</div>
														<div className="tags">
															<div className="tag">lab</div>
															<div className="tag">laminate</div>
															<div className="tag">furniture</div>
															<div className="tag">science</div>
															<div className="tag">table</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</td>
								</tr>
							)}
						</>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default Equipment;
