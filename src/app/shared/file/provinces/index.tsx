import { recentCustomers } from '@/data/recent-customers-data';
import { projectOverview } from '@/data/project-overview';
import BasicTableWidget from '@/components/controlled-table/basic-table-widget';
import { getColumns } from '@/app/shared/file/provinces/columns';

interface fileData {
  className?: string;
  data: string; // Assuming data is passed as a JSON string
}

interface Summary {
  labels: string[];
}

interface SurveyItem {
  select_from_list_name: string;
}

interface Content {
  survey: SurveyItem[];
  choices: Choice[];
}

interface Choice {
  list_name: string;
  label: string[];
}

interface MainObject {
  data: {
    summary: Summary;
    content: Content;
  };
}

const Provinces: React.FC<fileData> = ({ className, data }) => {
  // Parse the JSON string data
  let parsedData: MainObject;
  try {
    parsedData = JSON.parse(data);
  } catch (error) {
    console.error('Error parsing JSON data:', error);
    return <div>Error parsing JSON data</div>; // Handle parsing error gracefully
  }

  // Destructure parsedData and perform necessary checks
  const { summary, content } = parsedData.data;

  if (!summary || !content) {
    console.error('Incomplete data:', parsedData);
    return <div>Incomplete data structure</div>; // Handle incomplete data structure
  }

  // Extracting titles from summary.labels
  const titles = summary.labels || [];

  // Extracting select_from_list_name from content.survey
  const selectFromListNames = content.survey.map((question) => question.select_from_list_name).filter(Boolean);

  // Creating a set to ensure unique values
  const uniqueSelectFromListNames = new Set(selectFromListNames);

  // Extracting labels from content.choices where list_name matches select_from_list_name
  const labels = [];
  uniqueSelectFromListNames.forEach((listName) => {
    const choice = content.choices.find((choice) => choice.list_name === listName);
    if (choice) {
      labels.push(choice.label);
    }
  });

  // Logging for debugging purposes
  console.log("Titles:", titles);
  console.log("Labels:", labels);

  // Rendering BasicTableWidget with extracted data
  return (
    <BasicTableWidget
      title="Provinces"
      data={projectOverview} // Assuming projectOverview is imported correctly
      //@ts-ignore
      getColumns={getColumns}
      className={className}
      enablePagination
      noGutter
      searchPlaceholder="Search for Province..."
      variant="modern"
    />
  );
}

export default Provinces;
