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
  Avatar,
  Tabs,
} from "@radix-ui/themes";
import { Overview } from "./Overview.jsx";
import {
  CaretSortIcon,
  ShadowInnerIcon,
  MagnifyingGlassIcon,
  CheckIcon,
  PlusCircledIcon,
  TextAlignJustifyIcon,
} from "@radix-ui/react-icons";

export default function App() {
  return (
    <Card className="rounded-xl border bg-card text-card-foreground shadow">
      <Flex direction="column" gap="2">
        <div className="text-black flex justify-between border-b-2 mb-2 h-16 items-center">
          <div>
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

          <nav className="mx-6 hidden lg:block">
            <Tabs.Root defaultValue="overview">
              <Tabs.List color="black">
                <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                <Tabs.Trigger value="products">Products</Tabs.Trigger>
                <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
                <Tabs.Trigger value="customers">Customers</Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>
          </nav>

          <div className="flex items-center ml-auto">
            <div className="w-24 md:w-[180px] lg:w-[300px]">
              <TextField.Root variant="classic" placeholder="Search…" />
            </div>

            <div className="pl-2">
              <Avatar src="/src/assets/avatar-image.png" className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="p-7 pt-6">
          <div className="flex justify-between items-center">
            <h2 className="flex justify-start font-bold text-3xl">Dashboard</h2>
            <Button color="gray" variant="solid" highContrast>
              Download
            </Button>
          </div>
          <div className="flex justify-start mt-3 mb-4 w-6 ">
            <SegmentedControl.Root defaultValue="inbox">
              <SegmentedControl.Item value="overview">
                Overview
              </SegmentedControl.Item>
              <SegmentedControl.Item value="analytics">
                Analytics
              </SegmentedControl.Item>
              <SegmentedControl.Item value="reports">
                Reports
              </SegmentedControl.Item>
              <SegmentedControl.Item value="notifications">
                Notifications
              </SegmentedControl.Item>
            </SegmentedControl.Root>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            <Card className="rounded-xl border bg-card text-card-foreground shadow">
              <Box className="p-2">
                <Text as="div" size="2" className="pb-1 font-medium">
                  Total Revenue
                </Text>
                <Text as="div" size="5" weight="bold">
                  $45,231.89
                </Text>
                <Text as="div" size="1" color="gray">
                  +20.1% from last month
                </Text>
              </Box>
            </Card>
            <Card className="rounded-xl border bg-card text-card-foreground shadow">
              <Box className="p-2">
                <Text as="div" size="2" className="pb-1 font-medium">
                  Subscriptions
                </Text>
                <Text as="div" size="5" weight="bold" className="text-2xl">
                  +2350
                </Text>
                <Text as="div" size="1" color="gray">
                  +180.1% from last month
                </Text>
              </Box>
            </Card>
            <Card className="rounded-xl border bg-card text-card-foreground shadow">
              <Box className="p-2">
                <Text as="div" size="2" className="pb-1 font-medium">
                  Sales
                </Text>
                <Text as="div" size="5" weight="bold">
                  +12,234
                </Text>
                <Text as="div" size="1" color="gray">
                  +19% from last month
                </Text>
              </Box>
            </Card>
            <Card className="rounded-xl border bg-card text-card-foreground shadow">
              <Box className="p-2">
                <Text as="div" size="2" className="pb-1 font-medium">
                  Active Now
                </Text>
                <Text as="div" size="5" weight="bold">
                  +573
                </Text>
                <Text as="div" size="1" color="gray">
                  +201 since last hour
                </Text>
              </Box>
            </Card>
          </div>

          <div className="grid gap-4 grid-cols-1 lg:grid-cols-7 mt-4">
            <Card className="col-span-4 rounded-xl border bg-card text-card-foreground shadow">
              <div className="flex flex-col space-y-.5 p-6">
                <div>Overview</div>
              </div>
              <Overview />
            </Card>
            <Card className="col-span-3 rounded-xl border bg-card text-card-foreground shadow">
              <Table.Root>
                <Table.Row>
                  <div className="p-3">
                    Recent Sales
                    <Text
                      as="div"
                      size="1"
                      color="gray"
                      className="font-medium">
                      You made 265 sales this month.
                    </Text>
                  </div>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <div className="flex">
                      <div>
                        <Avatar src="/src/assets/avatar-image.png" />
                      </div>
                      <div className="flex flex-col pl-2">
                        <Text>Olivia Martin</Text>
                        <Text>olivia.martin@email.com</Text>
                      </div>
                    </div>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Text className="flex flex-row-reverse font-bold">
                      +$1,999.00
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <div className="flex">
                      <div>
                        <Avatar src="/src/assets/avatar-image-2.png" />
                      </div>
                      <div className="flex flex-col pl-2">
                        <Text>Jackson Lee </Text>
                        <Text>jackson.lee@email.com</Text>
                      </div>
                    </div>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Text className="flex flex-row-reverse font-bold">
                      +$39.00
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <div className="flex">
                      <div>
                        <Avatar src="/src/assets/avatar-image-3.png" />
                      </div>
                      <div className="flex flex-col pl-2">
                        <Text>Isabella Nguyen </Text>
                        <Text>isabella.nguyen@email.com</Text>
                      </div>
                    </div>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Text className="flex flex-row-reverse font-bold">
                      +$299.00
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <div className="flex">
                      <div>
                        <Avatar src="/src/assets/avatar-image-4.png" />
                      </div>
                      <div className="flex flex-col pl-2">
                        <Text>William Kim</Text>
                        <Text>will@email.com</Text>
                      </div>
                    </div>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Text className="flex flex-row-reverse font-bold">
                      +$99.00
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.RowHeaderCell>
                    <div className="flex">
                      <div>
                        <Avatar src="/src/assets/avatar-image-5.png" />
                      </div>
                      <div className="flex flex-col pl-2">
                        <Text>Sofia Davis sofia.</Text>
                        <Text>davis@email.com</Text>
                      </div>
                    </div>
                  </Table.RowHeaderCell>
                  <Table.Cell>
                    <Text className="flex flex-row-reverse font-bold">
                      +$39.00
                    </Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Root>
            </Card>
          </div>
        </div>
      </Flex>
    </Card>
  );
}
