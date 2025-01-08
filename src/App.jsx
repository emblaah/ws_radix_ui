import "./App.css";
import {
  Flex,
  Button,
  DropdownMenu,
  TextField,
  SegmentedControl,
  Box,
  Card,
  Text,
  Table,
} from "@radix-ui/themes";
import { Overview } from "./Overview.jsx";
import {
  CaretSortIcon,
  ShadowInnerIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

export default function App() {
  return (
    <Card>
      <Flex direction="column" gap="2">
        <div className="text-black flex justify-between border-b-2 mb-2">
          <div className="flex mb-2">
            <div className="">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft">
                    <ShadowInnerIcon />
                    Alicia Koch
                    <CaretSortIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item>
                    <TextField.Root placeholder="Search team…">
                      <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                      </TextField.Slot>
                    </TextField.Root>
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator />

                  <DropdownMenu.Label>Personal Account</DropdownMenu.Label>
                  <DropdownMenu.Item className="flex justify-between">
                    <div className="flex items-center gap-1">
                      <ShadowInnerIcon />
                      Alicia Koch
                    </div>
                    <CheckIcon />
                  </DropdownMenu.Item>
                  <DropdownMenu.Label>Teams</DropdownMenu.Label>
                  <DropdownMenu.Item>Acme Inc.</DropdownMenu.Item>
                  <DropdownMenu.Item>Monsters Inc.</DropdownMenu.Item>

                  <DropdownMenu.Separator />

                  <DropdownMenu.Item>
                    <PlusCircledIcon />
                    Create Team
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>

            <ul className="flex gap-2">
              <li>Overview</li>
              <li>Products</li>
              <li>Settings</li>
              <li>Customers</li>
            </ul>
          </div>
          <div className="flex">
            <TextField.Root
              variant="classic"
              placeholder="Search the docs…"
              className="w-60"
            />
            <img
              src="/src/assets/avatar-image.png"
              alt="Avatar Image"
              className="w-8 h-8"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center p-6">
            <h2 className="flex justify-start font-bold text-3xl">Dashboard</h2>
            <Button color="gray" variant="solid" highContrast>
              Download
            </Button>
          </div>
          <div className="flex justify-start mt-3">
            <SegmentedControl.Root defaultValue="inbox">
              <SegmentedControl.Item value="inbox">
                Overview
              </SegmentedControl.Item>
              <SegmentedControl.Item value="drafts">
                Analytics
              </SegmentedControl.Item>
              <SegmentedControl.Item value="sent">
                Reports
              </SegmentedControl.Item>
              <SegmentedControl.Item value="sent">
                Notifications
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>
          <div className="flex justify-around">
            <Card>
              <Box>
                <Text as="div" size="2">
                  Total Revenue
                </Text>
                <Text as="div" size="2" weight="bold">
                  $45,231.89
                </Text>
                <Text as="div" size="2" color="gray">
                  +20.1% from last month
                </Text>
              </Box>
            </Card>
            <Card>
              <Box>
                <Text as="div" size="2">
                  Subscriptions
                </Text>
                <Text as="div" size="2" weight="bold" className="text-2xl">
                  +2350
                </Text>
                <Text as="div" size="2" color="gray">
                  +180.1% from last month
                </Text>
              </Box>
            </Card>
            <Card>
              <Box>
                <Text as="div" size="2">
                  Sales
                </Text>
                <Text as="div" size="2" weight="bold">
                  +12,234
                </Text>
                <Text as="div" size="2" color="gray">
                  +19% from last month
                </Text>
              </Box>
            </Card>
            <Card>
              <Box>
                <Text as="div" size="2">
                  Active Now
                </Text>
                <Text as="div" size="2" weight="bold">
                  +573
                </Text>
                <Text as="div" size="2" color="gray">
                  +201 since last hour
                </Text>
              </Box>
            </Card>
          </div>

          <div className="flex-row md:flex">
            <Card className="m-6 w-lvw">
              <Overview />
            </Card>
            <Card className="m-6 w-lvw">
              <Table.Root>
                <Table.ColumnHeaderCell>
                  Recent Sales
                  <Text as="div" size="2" color="gray">
                    You made 265 sales this month.
                  </Text>
                </Table.ColumnHeaderCell>

                <Table.Body className="">
                  <Table.Row>
                    <Table.RowHeaderCell>
                      <Text className="flex">Danilo Sousa</Text>
                      <Text>danilo@example.com</Text>
                    </Table.RowHeaderCell>

                    <Table.Cell>
                      <Text className="flex flex-row-reverse font-bold">
                        +$1,999.00
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell>
                      <Text className="flex">Jackson Lee </Text>
                      <Text>jackson.lee@email.com</Text>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <Text className="flex flex-row-reverse font-bold">
                        +$39.00
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell>
                      <Text className="flex">Isabella Nguyen </Text>
                      <Text>isabella.nguyen@email.com</Text>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <Text className="flex flex-row-reverse font-bold">
                        +$299.00
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell>
                      <Text className="flex">William Kim </Text>
                      <Text>will@email.com</Text>
                    </Table.RowHeaderCell>
                    <Table.Cell>
                      <Text className="flex flex-row-reverse font-bold">
                        +$99.00
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.RowHeaderCell>
                      <Text className="flex">Sofia Davis sofia.</Text>
                      <Text>davis@email.com</Text>
                    </Table.RowHeaderCell>
                    <Table.Cell >
                      <Text className="flex flex-row-reverse font-bold">
                        +$39.00
                      </Text>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Root>
            </Card>
          </div>
        </div>
      </Flex>
    </Card>
  );
}
