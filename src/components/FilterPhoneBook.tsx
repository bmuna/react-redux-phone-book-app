import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { filterText } from "../actions/filterAction";
import SearchIcon from '@mui/icons-material/Search';


export const FilterPhoneBook: React.FC = () => {
       const dispatch = useDispatch();
       const [filterState, setFilterState] = useState<string>("");

    const filterTextChange = (txtVal: string) => {
        dispatch(filterText(txtVal));
    };

    const getSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterState(e.currentTarget.value);
        filterTextChange(e.currentTarget.value);
    };

    return (    
        <Box sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
        <Paper
          sx={{ p: '2px 4px', mb: '10px', display: 'flex', alignItems: 'center' }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            value={filterState || ""}
            onChange={getSearchTerm}
          />
            <SearchIcon />
        </Paper>
        </Box>
    );
};



